import {ListBox} from 'primereact/listbox';
import {useEffect, useState, useRef} from "react";
import {InputText} from "primereact/inputtext";
import axios from 'axios';
import {BlockUI} from 'primereact/blockui';

const CarSelect = ({
                       selectedBrand,
                       setSelectedBrand,
                       selectedModel,
                       setSelectedModel,
                       selectedYear,
                       setSelectedYear,
                       onChange,
                       onComplete,
                   }) => {
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [generationText, setGenerationText] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingBrands, setLoadingBrands] = useState(false);
    const [loadingModels, setLoadingModels] = useState(false);

    const modelRef = useRef(null);
    const yearRef = useRef(null);
    const packageRef = useRef(null);
    const packageInputRef = useRef(null);

    // Markaları yükle
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                setLoadingBrands(true);
                const response = await axios.post(route('super.car.brands.get'));
                setBrands(response.data);
            } catch (error) {
                console.error('Markalar yüklenirken hata oluştu:', error);
            } finally {
                setLoadingBrands(false);
            }
        };

        fetchBrands();
    }, []);

    // Seçili markaya göre modelleri yükle
    useEffect(() => {
        const fetchModels = async () => {
            if (selectedBrand) {
                try {
                    setLoadingModels(true);
                    const response = await axios.post(route('super.car.brands.models.get', selectedBrand.id));
                    setModels(response.data);
                } catch (error) {
                    console.error('Modeller yüklenirken hata oluştu:', error);
                } finally {
                    setLoadingModels(false);
                }
            } else {
                setModels([]);
            }
        };

        fetchModels();
    }, [selectedBrand]);

    useEffect(() => {
        if (selectedYear !== null && onComplete !== undefined) {
            let props = {
                brand: selectedBrand,
                model: selectedModel,
                generation: {
                    name: generationText,
                    modelYear: "",
                    non: true
                },
                brandLogo: selectedBrand?.logo,
                year: selectedYear,
            }

            onComplete(props);
        }
    }, [selectedYear]);

    useEffect(() => {
        if (onChange !== undefined) {
            let props = {
                brand: selectedBrand,
                model: selectedModel,
                generation: {
                    name: generationText,
                    modelYear: "",
                    non: true
                },
                brandLogo: selectedBrand?.logo,
                year: selectedYear,
            }

            onChange(props, selectedYear !== null);
        }
    }, [
        selectedBrand,
        selectedModel,
        selectedYear,
        generationText
    ]);

    async function generateYearsArray(generation) {
        let years = [];
        for (let i = 1975; i <= Number(new Date().getFullYear()); i++) {
            years.push({
                name: i
            });
        }
        years.sort((a, b) => b.name - a.name);
        return years;
    }

    const selectedOptionTemplate = (option) => {
        if (option) {
            return <div className="flex items-center">
                {selectedBrand?.logo && <img src={selectedBrand.logo} alt={option.name} className="w-6 h-6 mr-2"/>}
                <span>{option.name}</span>
            </div>;
        }
        return null;
    }

    const brandTemplate = (option) => {
        return (
            <div className="flex items-center">
                {option.logo && <img src={option.logo} alt={option.name} className="w-8 h-8 mr-2"/>}
                <span>{option.name}</span>
            </div>
        );
    };

    const modelTemplate = (option) => {
        return (
            <div className="flex items-center">
                {selectedBrand?.logo && <img src={selectedBrand.logo} alt={option.name} className="w-8 h-8 mr-2"/>}
                <span>{option.name}</span>
            </div>
        );
    };

    const yearTemplate = (option) => {
        return (
            <div className="flex items-center">
                {selectedBrand?.logo && <img src={selectedBrand.logo} alt={option.name + " .yıl"} className="w-8 h-8 mr-2"/>}
                <span>{option.name}</span>
            </div>
        );
    };

    const [years, setYears] = useState([]);
    
    useEffect(() => {
        const loadYears = async () => {
            const yearsArray = await generateYearsArray();
            setYears(yearsArray);
        };
        loadYears();
    }, []);

    useEffect(() => {
        if (selectedBrand && modelRef.current) {
            modelRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [selectedBrand]);

    useEffect(() => {
        if (selectedModel && yearRef.current) {
            yearRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [selectedModel]);

    useEffect(() => {
        if (selectedYear && packageRef.current) {
            packageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
                packageInputRef.current?.focus();
            }, 500);
        }
    }, [selectedYear]);

    return <>
        <div className="flex flex-col gap-2 mt-4">
            <label className="font-medium">Araç Markası</label>
            <BlockUI blocked={loadingBrands} template={<i className="pi pi-spin pi-spinner text-3xl"></i>}>
                <ListBox
                    value={selectedBrand}
                    onChange={(e) => {
                        setSelectedBrand(e.value);
                        setSelectedModel(null);
                        setSelectedYear(null);
                    }}
                    options={brands}
                    optionLabel="name"
                    placeholder="Araç Markası Seçiniz"
                    filter
                    className="w-full md:w-14rem"
                    itemTemplate={brandTemplate}
                    listStyle={{ height: '300px' }}
                />
            </BlockUI>
        </div>

        {selectedBrand && (
            <div className="flex flex-col gap-2 mt-4" ref={modelRef}>
                <label className="font-medium">Araç Modeli</label>
                <BlockUI blocked={loadingModels} template={<i className="pi pi-spin pi-spinner text-3xl"></i>}>
                    <ListBox
                        value={selectedModel}
                        onChange={(e) => {
                            setSelectedModel(e.value);
                            setSelectedYear(null);
                        }}
                        options={models}
                        optionLabel="name"
                        placeholder="Araç Modelini Seçiniz"
                        filter
                        className="w-full md:w-14rem"
                        itemTemplate={modelTemplate}
                        listStyle={{ height: '300px' }}
                    />
                </BlockUI>
            </div>
        )}

        {selectedModel && (
            <div className="flex flex-col gap-2 mt-4" ref={yearRef}>
                <label className="font-medium">Araç Yılı</label>
                <ListBox
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.value)}
                    options={years}
                    placeholder="Araç Yılı Seçiniz"
                    optionLabel="name"
                    filter
                    className="w-full md:w-14rem"
                    itemTemplate={yearTemplate}
                    listStyle={{ height: '300px' }}
                />
            </div>
        )}

        {selectedModel && (
            <div className="flex flex-col gap-2 mt-4" ref={packageRef}>
                <label className="font-medium">Paket Detayı</label>
                <InputText 
                    ref={packageInputRef}
                    value={generationText} 
                    onChange={e => setGenerationText(e.target.value)}
                    className="w-full md:w-14rem"
                    placeholder="Paket detayını giriniz"
                />
            </div>
        )}
    </>
}
export default CarSelect;
