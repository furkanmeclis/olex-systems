
import React, {useState, useEffect, useRef} from 'react';

import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { ScrollPanel } from 'primereact/scrollpanel';
import {Tooltip} from "primereact/tooltip";
import {Toast} from "primereact/toast";
import {Message} from "primereact/message";
export default function StockIn({stockRecords}) {
    const toast = useRef(null);
    const [products, setProducts] = useState(Object.values(stockRecords.all));
    const [layout, setLayout] = useState('grid');

    const gridItem = (product) => {
        return (
            <div className="p-2" key={product.id}>
                <div className="p-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg pb-16 relative">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <i className="pi pi-tag"></i>
                            <span className="text-gray-700 dark:text-gray-300">{product.category}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="pi pi-qrcode"></i>
                            <span className="font-bold product-sku-code cursor-pointer"
                                  data-pr-tooltip={"Stok Kodu: "+product.sku}
                                  data-pr-position={"top"}
                                  dangerouslySetInnerHTML={{__html: String(product.sku).substring(0,8).replace("CKY", `<span class="text-red-500">CKY</span>`)+(String(product.sku).length>8 ? "...":"")}}></span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-3 py-5">
                        <img className="rounded h-[15rem]" src={`${product.image}`} alt={product.name}/>
                        <div className="font-semibold w-full text-center text-gray-900 dark:text-gray-100">{product.name}</div>
                        <Tag value={product.status_label} severity={product.status_severity} />
                    </div>
                    <div>
                        <Accordion>
                            <AccordionTab header="Ürün Stok Kodları">
                                <ScrollPanel style={{width: '100%', height: '100px'}}>
                                    <ul>
                                        {product?.codes.map((code) => <li className={"my-2 border px-2 py-3 rounded select-all cursor-pointer"} onClick={() => {
                                            if (navigator.clipboard) {
                                                navigator.clipboard.writeText(code.code).then(() => {
                                                    toast.current.show({
                                                        severity: 'success',
                                                        summary: 'Kopyalandı',
                                                        detail: 'Stok kodu kopyalandı.',
                                                        life: 3000
                                                    });
                                                }).catch(err => {
                                                    console.error('Failed to copy text: ', err);
                                                });
                                            } else {
                                                console.error('Clipboard API is not supported');
                                            }

                                        }}>{code.used === 1 &&<Tag className={"select-none"} value={code.used === 1 && "Kullanıldı"} severity={"warning"} />} {code.code}</li>)}
                                    </ul>
                                </ScrollPanel>
                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
            </div>
        );
    };


    const itemTemplate = (product, layout, index) => {
        if (!product) {
            return;
        }
        return gridItem(product);
    };

    const listTemplate = (products, layout) => {
        return <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3">{products.map((product, index) => itemTemplate(product, layout, index))}</div>;
    };


    return (
        <div className="card">
            <Toast ref={toast} />
            <Tooltip target={".product-sku-code"}/>
            {products.length > 0 && <DataView value={products} listTemplate={listTemplate} layout={layout} />}
            {products.length === 0 && <Message className={"w-full"} severity={"info"} text={"Stok Kaydı Bulunamadı"} key={45} />}
        </div>
    )
}
