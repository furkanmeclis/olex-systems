import React, { useRef, useState } from 'react';
import { Chart } from 'primereact/chart';
import CustomButton from '@/Components/CustomButton';
import { Dialog } from 'primereact/dialog';
import { Menu } from 'primereact/menu';
import { SelectButton } from 'primereact/selectbutton';

const CustomChart = ({ type, data: initialData, horizontalOptions, verticalOptions, title, onVisibilityChange, chartId }) => {
    const chartRef = useRef(null);
    const fullscreenChartRef = useRef(null);
    const menuRef = useRef(null);
    const [fullscreen, setFullscreen] = useState(false);
    const [data, setData] = useState(initialData);
    const [currentSort, setCurrentSort] = useState('none');
    const [orientation, setOrientation] = useState('vertical'); // 'vertical' veya 'horizontal'

    React.useEffect(() => {
        setData(initialData);
    }, [initialData]);

    const handleOrientationChange = (newOrientation) => {
        setOrientation(newOrientation);
    };

    // Aktif options'ı belirle
    const currentOptions = orientation === 'horizontal' ? horizontalOptions : verticalOptions;

    const downloadChart = (format, isFullscreen = false) => {
        const canvas = isFullscreen ? fullscreenChartRef.current.getCanvas() : chartRef.current.getCanvas();
        const link = document.createElement('a');
        
        if (format === 'png') {
            link.download = `${title || 'chart'}.png`;
            link.href = canvas.toDataURL('image/png');
        } else if (format === 'jpg') {
            link.download = `${title || 'chart'}.jpg`;
            link.href = canvas.toDataURL('image/jpeg');
        }
        
        link.click();
    };

    const handleSort = (order) => {
        setCurrentSort(order);
        
        if (!data || !data.labels || !data.datasets) return;
        
        if (order === 'none') {
            setData(initialData);
            return;
        }

        const combined = data.labels.map((label, index) => ({
            label,
            data: data.datasets[0].data[index]
        }));

        combined.sort((a, b) => {
            return order === 'asc' ? a.data - b.data : b.data - a.data;
        });

        const sortedData = {
            labels: combined.map(item => item.label),
            datasets: data.datasets.map(dataset => ({
                ...dataset,
                data: combined.map(item => item.data)
            }))
        };

        setData(sortedData);
    };

    const orientationOptions = [
        { icon: 'pi pi-arrows-v', value: 'vertical', label: 'Dikey' },
        { icon: 'pi pi-arrows-h', value: 'horizontal', label: 'Yatay' }
    ];

    const sortOptions = [
        { icon: 'pi pi-sort', value: 'none', label: 'Varsayılan' },
        { icon: 'pi pi-sort-amount-up', value: 'asc', label: 'Artan' },
        { icon: 'pi pi-sort-amount-down', value: 'desc', label: 'Azalan' }
    ];

    const menuItems = [
   
        {
            label: 'Tam Ekran',
            icon: 'pi pi-window-maximize text-purple-500',
            command: () => setFullscreen(true)
        },
        {
            separator: true
        },
        {
            label: 'Gizle',
            icon: 'pi pi-eye-slash text-red-500',
            command: () => onVisibilityChange && onVisibilityChange(chartId, false)
        },
        {
            label: `${orientation === 'vertical' ? '• ' : ''}Dikey Grafik`,
            icon: 'pi pi-arrows-v text-blue-500',
            command: () => handleOrientationChange('vertical')
        },
        {
            label: `${orientation === 'horizontal' ? '• ' : ''}Yatay Grafik`,
            icon: 'pi pi-arrows-h text-blue-500',
            command: () => handleOrientationChange('horizontal')
        },
        {
            separator: true
        },
        {
            label: `${currentSort === 'none' ? '• ' : ''}Varsayılan Sıra`,
            icon: 'pi pi-sort text-gray-500',
            command: () => handleSort('none')
        },
        {
            label: `${currentSort === 'asc' ? '• ' : ''}Artan Sıra`,
            icon: 'pi pi-sort-amount-up text-blue-500',
            command: () => handleSort('asc')
        },
        {
            label: `${currentSort === 'desc' ? '• ' : ''}Azalan Sıra`,
            icon: 'pi pi-sort-amount-down text-blue-500',
            command: () => handleSort('desc')
        },
        {
            separator: true
        },
        {
            label: 'PNG olarak indir',
            icon: 'pi pi-image text-blue-500',
            command: () => downloadChart('png')
        },
        {
            label: 'JPG olarak indir',
            icon: 'pi pi-image text-green-500',
            command: () => downloadChart('jpg')
        }
    ];

    const renderFooter = () => {
        return (
            <div className="flex justify-end gap-2">
                <CustomButton
                    label="PNG İndir"
                    icon="pi-download"
                    color="blue"
                    onClick={() => downloadChart('png', true)}
                />
                <CustomButton
                    label="JPG İndir"
                    icon="pi-download"
                    color="green"
                    onClick={() => downloadChart('jpg', true)}
                />
                <CustomButton
                    label="Kapat"
                    icon="pi-times"
                    color="red"
                    onClick={() => setFullscreen(false)}
                />
            </div>
        );
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200">{title}</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold text-sm text-gray-600 dark:text-gray-400">Grafik Yönü</span>
                        <div className="flex gap-2">
                            {orientationOptions.map(option => (
                                <button
                                    key={option.value}
                                    onClick={() => handleOrientationChange(option.value)}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200 text-sm
                                        ${orientation === option.value 
                                            ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30' 
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                                        }`}
                                >
                                    <i className={`${option.icon} ${orientation === option.value ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}></i>
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold text-sm text-gray-600 dark:text-gray-400">Sıralama</span>
                        <div className="flex gap-2">
                            {sortOptions.map(option => (
                                <button
                                    key={option.value}
                                    onClick={() => handleSort(option.value)}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200 text-sm
                                        ${currentSort === option.value 
                                            ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30' 
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                                        }`}
                                >
                                    <i className={`${option.icon} ${currentSort === option.value ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}></i>
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="relative">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">{title}</h3>
                    <div>
                        <CustomButton
                            icon="pi-ellipsis-v"
                            color="secondary"
                            className="!p-2"
                            onClick={(e) => menuRef.current.toggle(e)}
                            aria-controls="chart-menu"
                            aria-haspopup
                        />
                        <Menu 
                            ref={menuRef} 
                            id="chart-menu" 
                            popup 
                            model={menuItems}
                            className="dark:bg-gray-800 dark:text-gray-200"
                        />
                    </div>
                </div>
                <Chart
                    ref={chartRef}
                    type={type}
                    data={data}
                    options={currentOptions}
                />
            </div>

            <Dialog 
                visible={fullscreen} 
                onHide={() => setFullscreen(false)}
                style={{ width: '90vw', height: '90vh' }}
                maximizable
                modal
                header={renderHeader()}
                footer={renderFooter()}
                contentClassName="h-full"
            >
                
                <div className="w-full h-full flex items-center justify-center p-4">
                    <Chart
                        ref={fullscreenChartRef}
                        type={type}
                        data={data}
                        options={{
                            ...currentOptions,
                            maintainAspectRatio: false,
                            responsive: true
                        }}
                        className="w-full h-full"
                    />
                </div>
            </Dialog>
        </>
    );
};

export default CustomChart; 