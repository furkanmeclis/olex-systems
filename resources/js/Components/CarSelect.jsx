import {Dropdown} from 'primereact/dropdown';
import {useEffect, useState} from "react";
import {FloatLabel} from 'primereact/floatlabel';
import {InputText} from "primereact/inputtext";
import axios from 'axios';

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

    // Markaları yükle
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                setLoading(true);
                const response = await axios.post(route('super.car.brands.get'));
                setBrands(response.data);
            } catch (error) {
                console.error('Markalar yüklenirken hata oluştu:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBrands();
    }, []);

    // Seçili markaya göre modelleri yükle
    useEffect(() => {
        const fetchModels = async () => {
            if (selectedBrand) {
                try {
                    setLoading(true);
                    const response = await axios.post(route('super.car.brands.models.get', selectedBrand.id));
                    setModels(response.data);
                } catch (error) {
                    console.error('Modeller yüklenirken hata oluştu:', error);
                } finally {
                    setLoading(false);
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

    const selectedOptionTemplate = (option, props) => {
        if (option) {
            return <div className="flex items-center">
                {selectedBrand?.logo && <img src={selectedBrand.logo} alt={option.name} className="w-6 h-6 mr-2"/>}
                <span>{option.name}</span>
            </div>;
        } else {
            return <span>{props.placeholder}</span>
        }
    }

    const [years, setYears] = useState([]);
    
    useEffect(() => {
        const loadYears = async () => {
            const yearsArray = await generateYearsArray();
            setYears(yearsArray);
        };
        loadYears();
    }, []);

    return <>
        <FloatLabel className="w-full md:w-14rem mt-4">
            <Dropdown
                inputId={"dd-brand"}
                value={selectedBrand}
                valueTemplate={selectedOptionTemplate}
                onChange={(e) => {
                    setSelectedBrand(e.value);
                    setSelectedModel(null);
                    setSelectedYear(null);
                }}
                options={brands}
                optionLabel="name"
                placeholder="Araç Markası Seçiniz"
                virtualScrollerOptions={{itemSize: 38}}
                checkmark={true}
                filter
                showFilterClear={true}
                highlightOnSelect={false}
                className="w-full md:w-14rem"
                loading={loading}
                itemTemplate={(option) => (
                    <div className="flex items-center">
                        {option.logo && <img src={option.logo} alt={option.name} className="w-8 h-8 mr-2"/>}
                        <span>{option.name}</span>
                    </div>
                )}
            />
            <label htmlFor="dd-brand">Araç Markası</label>
        </FloatLabel>

        {selectedBrand && <FloatLabel className="w-full md:w-14rem mt-4">
            <Dropdown
                inputId={"dd-model"}
                value={selectedModel}
                onChange={(e) => {
                    setSelectedModel(e.value);
                    setSelectedYear(null);
                }}
                options={models}
                optionLabel="name"
                placeholder="Araç Modelini Seçiniz"
                valueTemplate={selectedOptionTemplate}
                virtualScrollerOptions={{itemSize: 38}}
                checkmark={true}
                filter
                showFilterClear={true}
                highlightOnSelect={false}
                className="w-full md:w-14rem"
                loading={loading}
                itemTemplate={(option) => (
                    <div className="flex items-center">
                        {selectedBrand.logo && <img src={selectedBrand.logo} alt={option.name} className="w-8 h-8 mr-2"/>}
                        <span>{option.name}</span>
                    </div>
                )}
            />
            <label htmlFor="dd-model">Araç Modeli</label>
        </FloatLabel>}

        {selectedModel && <FloatLabel className="w-full md:w-14rem mt-4">
            <InputText id="dd-generation-text" value={generationText} onChange={e => setGenerationText(e.target.value)}
                       className="w-full md:w-14rem"/>
            <label htmlFor="dd-generation-text">Paket Detayı</label>
        </FloatLabel>}

        {selectedModel && <FloatLabel className="w-full md:w-14rem mt-4">
            <Dropdown
                inputId={"dd-year"}
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.value)}
                options={years}
                placeholder="Araç Yılı Seçiniz"
                virtualScrollerOptions={{itemSize: 38}}
                valueTemplate={selectedOptionTemplate}
                checkmark={true}
                optionLabel={"name"}
                filter
                showFilterClear={true}
                highlightOnSelect={false}
                className="w-full md:w-14rem"
                itemTemplate={(option) => (
                    <div className="flex items-center">
                        {selectedBrand.logo && <img src={selectedBrand.logo} alt={option.name + " .yıl"} className="w-8 h-8 mr-2"/>}
                        <span>{option.name}</span>
                    </div>
                )}
            />
            <label htmlFor="dd-year">Araç Yılı</label>
        </FloatLabel>}
    </>
}
export default CarSelect;
