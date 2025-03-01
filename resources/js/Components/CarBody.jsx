import {useEffect, useRef, useState} from "react";
import {Tree} from 'primereact/tree';
import {ScrollPanel} from 'primereact/scrollpanel';
import { Button } from 'primereact/button';
import {classNames} from "primereact/utils";
const CarBody = ({editable = false, onChange, value = [],pdfSource=false}) => {
    let s0ClassName = "cls_" + Math.random().toString(36).substring(7) + "_s0";
    let s1ClassName = "cls_" + Math.random().toString(36).substring(7) + "_s1";
    let s2ClassName = "cls_" + Math.random().toString(36).substring(7) + "_s2";
    let svgClipPathId = "id_" + Math.random().toString(36).substring(7) + "_cp1";
    const svgRef = useRef(null);
    const [selectedParts, setSelectedParts] = useState({
        key_body: {checked: false, partialChecked: false},
        key_window: {checked: false, partialChecked: false},
    });
    useEffect(() => {
        let object = {};
        value.map((part) => {
            if (String(part).includes("body")) {
                object.key_body = {checked: false, partialChecked: true};
            }
            if (String(part).includes("window")) {
                object.key_window = {checked: false, partialChecked: true};
            }
            object[part] = {checked: true, partialChecked: false};
        });
        setSelectedParts(object);
    }, [editable]);
    useEffect(() => {
        let fillParts = [];
        Object.entries(selectedParts).map(([key, value]) => {
            if (value.checked && !String(key).includes("key_")) {
                fillParts.push(key);
            }
        });
        onChange(fillParts);
        fillBody(fillParts);
    }, [selectedParts]);
    let cursor = editable ? "pointer" : "default";
    const [colors, setColors] = useState({});
    const handleDownload = () => {
        const svg = svgRef.current;
        const svgData = new XMLSerializer().serializeToString(svg);
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const svgUrl = URL.createObjectURL(svgBlob);
        const downloadLink = document.createElement('a');
        downloadLink.href = svgUrl;
        downloadLink.download = 'dynamic.svg';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    const carParts = {
        body_tavan: "Tavan",
        body_kaput: "Kaput",
        body_bagaj: "Bagaj",
        window_sunroof: "Sunroof",
        window_on_cam: "Ön Cam",
        window_arka_cam: "Arka Cam",
        body_arka_tampon: "Arka Tampon",
        body_on_tampon: "Ön Tampon",
        body_sol_arka_camurluk: "Sol Arka Camurluk",
        body_sol_on_camurluk: "Sol Ön Camurluk",
        body_sol_arka_kapi: "Sol Arka Kapı",
        window_sol_arka_kapi: "Sol Arka Kapı Camı",
        body_sol_on_kapi: "Sol Ön Kapı",
        window_sol_on_kapi: "Sol Ön Kapı Camı",
        body_sag_arka_camurluk: "Sağ Arka Camurluk",
        body_sag_on_camurluk: "Sağ Ön Camurluk",
        body_sag_arka_kapi: "Sağ Arka Kapı",
        window_sag_arka_kapi: "Sağ Arka Kapı Camı",
        body_sag_on_kapi: "Sağ Ön Kapı",
        window_sag_on_kapi: "Sağ Ön Kapı Camı",
    }
    const partColors = {
        body_hover: "#1a8f14",
        window_hover: "#3db5ff",
        body_dark: "#1a6711",
        window_dark: "#156ca1",
    }
    const bodyHover = (e) => {
        let partId = e.target.id;
        let isSelected;
        if (editable) {
            isSelected = e.target.dataset?.selected === "true";
            e.target.dataset.selected = "" + !isSelected;
            isSelected = e.target.dataset?.selected === "true";
        } else {
            return;
            isSelected = false;
        }

        if (e.type === "mouseenter") {
            if (isSelected) {
                e.target.style.fill = partColors.body_dark;
            } else {
                e.target.style.fill = partColors.body_hover;
            }
        } else if (e.type === "mouseleave") {
            if (isSelected) {
                e.target.style.fill = partColors.body_hover;
            } else {
                e.target.style.fill = colors[partId] ?? "#ffffff";
            }
        } else if (e.type === "click") {
            if (isSelected) {
                e.target.style.fill = partColors.body_dark;
            } else {
                e.target.style.fill = partColors.body_hover;
            }
            if (editable) {
                setSelectedParts(prevSelectedParts => {
                    let newSelectedParts = {...prevSelectedParts};
                    if (!newSelectedParts[partId]) newSelectedParts[partId] = {checked: false, partialChecked: false};
                    newSelectedParts[partId] = {checked: !newSelectedParts[partId].checked, partialChecked: false};
                    let count = Object.keys(carParts).filter((key) => String(key).includes('body')).length;
                    let selectedCount = Object.entries(newSelectedParts).filter(([key, value]) => value.checked && String(key).includes('body')).length;
                    newSelectedParts['key_body'] = {
                        checked: selectedCount === count,
                        partialChecked: selectedCount > 0 && selectedCount !== count && selectedCount < count
                    };
                    return newSelectedParts;
                })
            }
        }
        if (editable) {
            onSelectionChange({value: selectedParts}, false);
        }
    }
    const windowHover = (e) => {
        let partId = e.target.id;
        let isSelected;
        if (editable) {
            isSelected = e.target.dataset?.selected === "true";
            e.target.dataset.selected = "" + !isSelected;
            isSelected = e.target.dataset?.selected === "true";
        } else {
            return;
            isSelected = false;
        }
        if (e.type === "mouseenter") {
            if (isSelected) {
                e.target.style.fill = partColors.window_dark;
            } else {
                e.target.style.fill = partColors.window_hover;
            }
        } else if (e.type === "mouseleave") {
            if (isSelected) {
                e.target.style.fill = partColors.window_hover;
            } else {
                e.target.style.fill = colors[partId] ?? "#bababa";
            }
        } else if (e.type === "click") {
            if (isSelected) {
                e.target.style.fill = partColors.window_dark;
            } else {
                e.target.style.fill = partColors.window_hover;
            }
            if (editable) {
                setSelectedParts(prevSelectedParts => {
                    let newSelectedParts = {...prevSelectedParts};
                    if (!newSelectedParts[partId]) newSelectedParts[partId] = {checked: false, partialChecked: false};
                    newSelectedParts[partId] = {checked: !newSelectedParts[partId].checked, partialChecked: false};
                    let count = Object.keys(carParts).filter((key) => String(key).includes('window')).length;
                    let selectedCount = Object.entries(newSelectedParts).filter(([key, value]) => value.checked && String(key).includes('window')).length;
                    newSelectedParts['key_window'] = {
                        checked: selectedCount === count,
                        partialChecked: selectedCount > 0 && selectedCount !== count && selectedCount < count
                    };
                    return newSelectedParts;
                })
            }
        }
        if (editable) {
            onSelectionChange({value: selectedParts}, false);
        }
    }
    const carPartsNode = [
        {
            key: "key_body",
            label: "GÖVDE",
            icon: "pi pi-fw pi-image",
            children: Object.entries(carParts).map(([key, value]) => {
                if (String(key).includes("body")) {
                    return {
                        key: key,
                        label: value,
                        icon: "pi pi-fw pi-image",
                    }
                } else {
                    return null;
                }
            }).filter((part) => part !== null)
        },
        {
            key: "key_window",
            label: "CAMLAR",
            icon: "pi pi-fw pi-image",
            children: Object.entries(carParts).map(([key, value]) => {
                if (String(key).includes("window")) {
                    return {
                        key: key,
                        label: value,
                        icon: "pi pi-fw pi-image",
                    }
                } else {
                    return null;
                }
            }).filter((part) => part !== null)
        }
    ];
    const fillBody = (parts) => {
        Object.entries(carParts).map(([key, value]) => {
            let partElement = document.getElementById(key);
            if (partElement) {
                let color = "#fff";
                if (String(key).includes("window")) {
                    color = "#bababa";
                }
                if (String(key).includes("body") && parts.includes(key)) {
                    color = partColors.body_hover;
                } else if (String(key).includes("window") && parts.includes(key)) {
                    color = partColors.window_hover;
                }
                partElement.style.fill = color;
            }
        });
        parts.map((partId) => {
            let partElement = document.getElementById(partId);
            if (partElement && String(partId).includes("body")) {
                partElement.style.fill = partColors.body_hover;
            } else if (partElement && String(partId).includes("window")) {
                partElement.style.fill = partColors.window_hover;
            }

        });
    }
    const onSelectionChange = (e, transaction = true) => {
        let fillParts = [];
        Object.entries(e.value).map(([key, value]) => {
            if (value.checked && !String(key).includes("key_")) {
                fillParts.push(key);
            }
        });
        fillBody(fillParts);
        if (transaction) {
            setSelectedParts(e.value);
        }
    }
    const SVG = () => {
        return <><svg ref={svgRef} version="1.2" xmlns="http://www.w3.org/2000/svg" className={classNames("",{
            'lg:w-[40vw]': editable === true && pdfSource === false,
            'lg:w-96': pdfSource === false ? (editable === false) : true,
        })} viewBox="0 0 1216 927"
                      width={editable ? "80vw":"28vw"}>
            <defs>
                <clipPath clipPathUnits="userSpaceOnUse" id={svgClipPathId}>
                    <path d="m0 0h1216v927h-1216z"/>
                </clipPath>

            </defs>
            <style>
                {`.${s0ClassName} {fill: none;stroke: #737373;stroke-miterlimit:100;stroke-width: 1.5;cursor:${cursor};}.${s1ClassName} {cursor:${cursor};fill: #efefef;stroke: #737373;stroke-miterlimit:100;stroke-width: 1.5}.${s2ClassName} {cursor:${cursor};fill: #bababa;stroke: #737373;stroke-miterlimit:100;stroke-width: 1.5}`}
            </style>
            <g id="car_template" clipPath={`url(#${svgClipPathId})`}>
                <g id="olex_car">
                    <g id="govde-ust">
                        <path id="govde_ust" fillRule="evenodd" className={s0ClassName}
                              d="m220.3 558.1c3.1 11.6 7.5 20.6 13.7 27.1 18 19 38.2 35.8 93 35.8 54.8 0 371 0 371 0 0 0-11.9 9.5-14 18.9-2.1 9.4-2.4 15.2 13 13.9 20.5-1.7 28.1-29.1 30-33.8 0 0 113.3 0 146 0 46.8 0 64.7-25 74-42.7 9.3-17.7 28-58.8 28-115.3 0-56.5-18.7-97.2-28-115-9.3-17.8-27.2-43-74-43-32.7 0-146 0-146 0-1.9-4.7-9.5-32.3-30-34-15.4-1.3-15.1 4.5-13 14 2.1 9.5 14 19 14 19 0 0-316.2 0-371 0-54.8 0-75 17-93 36-18 19-21 61-21 124 0 31.1 0.7 56.6 3.6 76.8 0 0-9.7 0-11.6 0-1.9 0-5 0.7-5 4.2 0 3.5 0 5.8 0 8 0 2.2-0.2 6 6 6 6.2 0 14.3 0.1 14.3 0.1z"/>
                        <path id="body_tavan" onMouseEnter={bodyHover} onMouseLeave={bodyHover}
                              onClick={bodyHover}
                              fillRule="evenodd" className={s1ClassName}
                              d="m619 463c0 44.6-11 90.5-11 90.5h-185c0 0-10-50.7-10-90.5 0-39.8 10-92 10-92h185c0 0 11 47.4 11 92z"/>
                        <path id="body_kaput" onMouseEnter={bodyHover} onMouseLeave={bodyHover}
                              onClick={bodyHover}
                              fillRule="evenodd" className={s1ClassName}
                              d="m734 324.2c0 0 119.5 0 143 0 23.5 0 32.6 0.3 49 24.8 16.4 24.5 29 72.9 29 114 0 41.1-12.6 88-29 112.4-16.4 24.4-25.5 24.6-49 24.6-23.5 0-143 0-143 0 25.2-43.9 26-137 26-137 0 0-0.8-94.6-26-138.8z"/>
                        <path id="body_bagaj" onMouseEnter={bodyHover} onMouseLeave={bodyHover}
                              onClick={bodyHover}
                              fillRule="evenodd" className={s1ClassName}
                              d="m242 567.4c10 20.7 30.2 32.6 55 32.6 24.8 0 40 0 40 0 0 0-13-81.3-13-137 0-55.7 13-138.8 13-138.8 0 0-15.2 0-40 0-24.8 0-45 12-55 32.8-10 20.8-15 45-15 105 0 60 5 84.7 15 105.4z"/>
                        <path id="window_sunroof" onMouseEnter={windowHover} onMouseLeave={windowHover}
                              onClick={windowHover}
                              className={s2ClassName}
                              d="m505 383h72c5 0 9 4 9 9v139c0 5-4 9-9 9h-72c-5 0-9-4-9-9v-139c0-5 4-9 9-9z"/>
                        <path id="window_top_yan_camlar"
                              fillRule="evenodd" className={s2ClassName}
                              d="m458 357c-14.6 0-18.6-3.2-28-7-9.4-3.8-27.1-13.3-34-17-6.9-3.7-8.3-8.8-3-8.8 5.3 0 294.1 0 299 0 4.9 0 6.3 5.9 0 7.8-6.3 1.9-37.1 11.6-63 19-22.3 6.4-33.4 6-56 6-22.6 0-100.4 0-115 0zm115 210.4c22.6 0 33.7-0.4 56 6 25.9 7.4 56.7 17 63 18.9 6.3 1.9 4.9 7.7 0 7.7-4.9 0-293.7 0-299 0-5.3 0-3.9-5 3-8.7 6.9-3.7 24.6-13.2 34-16.9 9.4-3.8 13.4-7 28-7 14.6 0 92.4 0 115 0z"/>
                        <path id="window_on_cam" onMouseEnter={windowHover} onMouseLeave={windowHover}
                              onClick={windowHover}
                              fillRule="evenodd" className={s2ClassName}
                              d="m622 378c-2.8-9.3 2.8-16.1 19-21 16.2-4.9 53.2-15.1 63-18 9.8-2.9 21.3-7.5 27 9 5.7 16.5 15 64.5 15 115 0 50.5-9.3 97-15 113.4-5.7 16.3-17.2 11.8-27 8.9-9.8-2.9-46.8-13-63-17.9-16.2-4.9-21.8-11.7-19-20.9 2.8-9.2 8-53 8-83.5 0-30.5-5.2-75.7-8-85z"/>
                        <path id="window_arka_cam" onMouseEnter={windowHover} onMouseLeave={windowHover}
                              onClick={windowHover}
                              fillRule="evenodd" className={s2ClassName}
                              d="m405 388c2.7-10.5 2.4-16-8-21-10.4-5-22.3-11.3-31-15-8.7-3.7-17.1-9.2-21 9-3.9 18.2-8 89-8 102 0 13 4.1 82.3 8 100.4 3.9 18.1 12.3 12.6 21 9 8.7-3.7 20.6-9.9 31-14.9 10.4-5.1 10.7-10.5 8-20.9-2.7-10.5-4-54.3-4-73.6 0-19.3 1.3-64.5 4-75z"/>
                    </g>
                    <g id="govde-arka">
                        <path id="govde_arka" className={s0ClassName}
                              d="m171 311.6c0 0-23.5-8.7-36-8.7-12.5 0-52 0-52 0-13.3 0-24 9.3-24 20.8 0 0-6 69.9-6 139.2 0 68.9 6 137.4 6 137.4 0 11.5 10.7 20.8 24 20.8 0 0 27.8 0 52.2 0 15.6 0 35.8-12.1 35.8-12.1z"/>
                        <path id="body_arka_tampon" onMouseEnter={bodyHover} onMouseLeave={bodyHover}
                              onClick={bodyHover}
                              fillRule="evenodd" className={s1ClassName}
                              d="m156 596.1c0 0-15.1 11.1-26.7 11.1-18.2 0-38.9 0-38.9 0-9.9 0-17.9-8.5-17.9-19 0 0-4.5-62.5-4.5-125.4 0-63.2 4.5-127 4.5-127 0-10.5 8-19 17.9-19 0 0 29.4 0 38.8 0 9.3 0 26.8 7.9 26.8 7.9zm-45-249v54.2c0 6.6 5.4 12 12 12h1c6.6 0 12-5.4 12-12v-54.2c0-6.7-5.4-12-12-12h-1c-6.6 0-12 5.3-12 12zm0 176.5v54.2c0 6.7 5.4 12 12 12h1c6.6 0 12-5.3 12-12v-54.2c0-6.7-5.4-12-12-12h-1c-6.6 0-12 5.3-12 12z"/>
                    </g>
                    <g id="govde_on">
                        <path id="govde_on" className={s0ClassName}
                              d="m1023 462v-158.9c0 0-13 0-13-24.2 0-24.2 3.1-31.9 14-31.9 10.9 0 21.3 1.7 23 12 1.7 10.2 5 34.8 5 34.8 16.2-9.2 84-9 84-9 15.5 0 28 12.5 28 27.9v149.5 149.8c0 15.5-12.5 28-28 28 0 0-67.8 0.3-84-9 0 0-3.3 24.7-5 35-1.7 10.3-12.1 12-23 12-10.9 0-14-7.7-14-32 0-24.3 13-24.3 13-24.3v-159.5"/>
                        <path id="body_on_tampon" onMouseEnter={bodyHover} onMouseLeave={bodyHover}
                              onClick={bodyHover}
                              fillRule="evenodd" className={s1ClassName}
                              d="m1056 306.6c13.9-8.6 72-8.4 72-8.4 13.3 0 24 11.6 24 25.8v277.1c0 14.3-10.7 25.9-24 25.9 0 0-58.1 0.2-72-8.4zm40.5 298.6c16.2-6.6 22.1-31.6 22.1-50 0-18.3 0.6-29.7-21.1-24-21.7 5.8-24.2 61-24.2 61-2.1 25.8 6.9 19.7 23.2 13zm-22.9-272.8c0 0 2.4 53.7 24 59.2 21.6 5.6 21-5.4 21-23.3 0-17.8-5.9-42.1-22-48.6-16.1-6.4-25.1-12.4-23 12.7z"/>
                    </g>
                    <g id="govde-sol">
                        <path id="body_sol" fillRule="evenodd" className={s0ClassName}
                              d="m212.2 129.3c-4.3 6.4 1 22.6 1 22.6 0 0 1.9 20.7 5 27.6 3.1 6.9 4.5 15.8 3 22.7-1.5 6.8-2.3 7.4 5 12.8 7.2 5.3 33.9 6.8 49 5.9 15-1 15.8 2.8 24 7.9 8.1 5 64.3 49.7 178.9 54.2 169.7 6.5 272.8-77.4 289-81.8 16.1-4.4 72.8-14.3 99.9-17.7 27.1-3.5 52.3-4.3 85-26.6 21.4-14.7 22.5-37.3 16-58.2-6.5-20.9-3.6-26.6-5-31.5-1.4-4.9-0.8-6.8-9-7.9-8.2-1.1-52.4-2.5-58-2.9-5.6-0.5-7 2.4-7 11.8 0 8.8 5.9 80-65 81.8-68 1.6-67.9-63-67.9-74.9 0-12 1.4-18.7-7-18.7-8.5 0-317.4 0-324 0-6.5 0-6 3.6-6 11.8 0 8.1 5.2 83.7-67.9 83.7-49.1 0-67-42.2-67-67 0-8.8-1.9-10.8-8-10.8-6.2 0-29.2 4.8-35 13.8-5.9 9-21.6 30.3-29 41.4z"/>
                        <path id="body_sol_arka_camurluk" onMouseEnter={bodyHover} onMouseLeave={bodyHover}
                              onClick={bodyHover}
                              fillRule="evenodd" className={s1ClassName}
                              d="m379.1 157.8c0 0-15 5-31.9 5-49.3 0-71.5-47.8-71.5-69.5 0-7.7-1.6-9.5-6.9-9.5-5.4 0-17.5 4.2-22.6 12.1-5.1 7.9-18.9 26.5-25.4 36.2-3.7 5.6 0.9 19.8 0.9 19.8 0 0 1.7 18.1 4.4 24.1 2.7 6 3.9 13.8 2.6 19.8-1.3 6-2 6.5 4.4 11.2 6.3 4.6 29.6 6 42.8 5.1 13.1-0.8 51.8 4.7 65.3 1.9 13.4-2.8 16.3-12.3 37.9-56.2z"/>
                        <path id="body_sol_on_camurluk" onMouseEnter={bodyHover} onMouseLeave={bodyHover}
                              onClick={bodyHover}
                              fillRule="evenodd" className={s1ClassName}
                              d="m743.9 72.7c0 14.2 0 90.5 80.4 88.6 83.8-2.1 74.8-83.4 74.8-93.8 0-4.3 3.8-3.3 7.9-3.3 4.1 0 43 3.3 46 4 3 0.6 3.7 5.1 3 11.8-0.7 6.7 14.5 48.3-4 65-18.5 16.7-60.5 31.3-114 35.5-77.7 6.1-112.9 24.6-112.9 24.6 0 0 24-55.9 8-141.9h11z"/>
                        <path id="body_sol_arka_kapi" onMouseEnter={bodyHover} onMouseLeave={bodyHover}
                              onClick={bodyHover}
                              fillRule="evenodd" className={s1ClassName}
                              d="m528.1 267.2c0 0 19.7-81.2 15-200 0 0-75.1 0-91 0-8.7 0-18.2 0.3-22 29.5-5 39.6-27 51.5-38 59.2-8.6 6-21 39.6-24 47.3-2.9 7.7-3.7 21.1 7 30.5 10.7 9.4 37.4 23.6 69 28.6 31.6 4.9 84 4.9 84 4.9z"/>
                        <path id="window_sol_arka_kapi" onMouseEnter={windowHover} onMouseLeave={windowHover}
                              onClick={windowHover}
                              fillRule="evenodd" className={s2ClassName}
                              d="m374.1 214c0-8.6 6.8-15.8 23-15.8 16.3 0 103 0 114 0 11 0 17 0 17 12.8 0 12.9-5.7 42.5-7 46.3-1.2 3.9-6.4 4-15 4-8.6 0-68.8-4.4-87-10.8-18.1-6.5-45-20.3-45-36.5z"/>
                        <path id="body_sol_on_kapi" onMouseEnter={bodyHover} onMouseLeave={bodyHover}
                              onClick={bodyHover}
                              fillRule="evenodd" className={s1ClassName}
                              d="m552.1 66.2c0 0 5.7 111.2-15 201 0 0 74.9 0.9 145-40.4 35.6-21 37.6-26.8 43-52.2 5.3-25.4 7.6-72.3 1-108.4z"/>
                        <path id="window_sol_on_kapi" onMouseEnter={windowHover} onMouseLeave={windowHover}
                              onClick={windowHover}
                              fillRule="evenodd" className={s2ClassName}
                              d="m555.1 219.9c-3.5 19.9-4.9 31-6 34.5-1.1 3.5 0.7 6.4 11 4.9 10.3-1.5 97.5-16.4 145-56.1 0 0-12.9 0-20 0-7.2 0-13-6.6-13-12.9 0-6.2 2.9-13.7 14-13.7 11.1 0 23 0 23 0 0 0-3.5-4-13-4-9.6 0-29-1.2-29 17.7 0 0-76.5 2.9-89 4-12.5 1.1-18.8 1.7-23 25.6z"/>
                    </g>
                    <g id="govde-sag">
                        <path id="body_sag" fillRule="evenodd" className={s0ClassName}
                              d="m212 797c-4.3-6.6 1-23 1-23 0 0 1.9-21 5-28 3.1-7 4.5-16 3-23-1.5-7-2.3-7.6 5-13 7.3-5.4 34-7 49-6 15 1 15.8-2.9 24-8 8.2-5.1 64.3-50.5 179-55 169.8-6.7 272.9 78.5 289 83 16.1 4.5 72.9 14.5 100 18 27.1 3.5 52.3 4.3 85 27 21.4 14.8 22.5 37.8 16 59-6.5 21.2-3.6 27-5 32-1.4 5-0.8 6.9-9 8-8.2 1.1-52.4 2.5-58 3-5.6 0.5-7-2.5-7-12 0-8.9 5.9-81.2-65-83-68-1.7-68 63.9-68 76 0 12.1 1.4 19-7 19-8.4 0-317.5 0-324 0-6.5 0-6-3.7-6-12 0-8.3 5.2-85-68-85-49.1 0-67 42.8-67 68 0 8.9-1.9 11-8 11-6.1 0-29.2-4.9-35-14-5.8-9.1-21.6-30.8-29-42z"/>
                        <path id="body_sag_arka_camurluk" onMouseEnter={bodyHover} onMouseLeave={bodyHover}
                              onClick={bodyHover}
                              fillRule="evenodd" className={s1ClassName}
                              d="m379 768c0 0-15-5-32-5-49.3 0-71.4 48.5-71.4 70.5 0 7.8-1.6 9.6-7 9.6-5.4 0-17.5-4.2-22.6-12.2-5.1-8-18.9-26.9-25.3-36.7-3.8-5.8 0.8-20.1 0.8-20.1 0 0 1.7-18.4 4.4-24.5 2.7-6.1 3.9-14 2.6-20.1-1.3-6.1-2-6.6 4.4-11.4 6.3-4.7 29.7-6.1 42.8-5.2 13.2 0.8 51.9-4.7 65.3-1.9 13.4 2.8 16.4 12.5 38 57z"/>
                        <path id="body_sag_on_camurluk" onMouseEnter={bodyHover} onMouseLeave={bodyHover}
                              onClick={bodyHover}
                              fillRule="evenodd" className={s1ClassName}
                              d="m743.9 854.4c0-14.4 0-91.9 80.4-89.9 83.8 2.1 74.8 84.6 74.8 95.2 0 4.3 3.8 3.3 7.9 3.3 4.1 0 43-3.4 46-4 3-0.6 3.7-5.2 3-12-0.7-6.8 14.5-49.1-4-66-18.5-16.9-60.5-31.7-114-36-77.7-6.2-113-25-113-25 0 0 24 56.8 8 144h11z"/>
                        <path id="body_sag_arka_kapi" onMouseEnter={bodyHover} onMouseLeave={bodyHover}
                              onClick={bodyHover}
                              fillRule="evenodd" className={s1ClassName}
                              d="m528 657c0 0 19.7 82.5 15 203 0 0-75.1 0-91 0-8.7 0-18.2-0.3-22-30-5.1-40.1-27-52.2-38-60-8.6-6.1-21-40.2-24-48-3-7.8-3.7-21.4 7-31 10.7-9.6 37.4-24 69-29 31.6-5 84-5 84-5zm-154 54c0 8.7 6.7 16 23 16 16.3 0 103 0 114 0 11 0 17 0.1 17-13 0-13.1-5.8-43.1-7-47-1.2-3.9-6.4-4-15-4-8.6 0-68.8 4.4-87 11-18.2 6.6-45 20.6-45 37z"/>
                        <path id="window_sag_arka_kapi" onMouseEnter={windowHover} onMouseLeave={windowHover}
                              onClick={windowHover}
                              fillRule="evenodd" className={s2ClassName}
                              d="m374 711c0 8.7 6.7 16 23 16 16.3 0 103 0 114 0 11 0 17 0.1 17-13 0-13.1-5.8-43.1-7-47-1.2-3.9-6.4-4-15-4-8.6 0-68.8 4.4-87 11-18.2 6.6-45 20.6-45 37z"/>
                        <path id="body_sag_on_kapi" onMouseEnter={bodyHover} onMouseLeave={bodyHover}
                              onClick={bodyHover}
                              fillRule="evenodd" className={s1ClassName}
                              d="m552 861c0 0 5.7-112.9-15-204 0 0 74.9-0.9 145 41 35.6 21.3 37.7 27.2 43 53 5.3 25.8 7.7 73.4 1 110zm26-130c12.5 1.2 89 4 89 4 0 19.3 19.5 18 29 18 9.5 0 13-4 13-4 0 0-11.9 0-23 0-11.1 0-14-7.6-14-14 0-6.4 5.8-13 13-13 7.2 0 20 0 20 0-47.5-40.3-134.7-55.5-145-57-10.3-1.5-12.1 1.4-11 5 1.1 3.6 2.5 14.8 6 35 4.2 24.2 10.5 24.8 23 26z"/>
                        <path id="window_sag_on_kapi" onMouseEnter={windowHover} onMouseLeave={windowHover}
                              onClick={windowHover}
                              fillRule="evenodd" className={s2ClassName}
                              d="m555 705c-3.5-20.2-4.9-31.4-6-35-1.1-3.6 0.7-6.5 11-5 10.3 1.5 97.5 16.7 145 57 0 0-12.8 0-20 0-7.2 0-13 6.6-13 13 0 6.4 2.9 14 14 14 11.1 0 23 0 23 0 0 0-3.5 4-13 4-9.5 0-29 1.3-29-18 0 0-76.5-2.8-89-4-12.5-1.2-18.8-1.8-23-26z"/>
                    </g>
                </g>
            </g>
        </svg></>
    }
    return <>
        <span className={"hidden lg:w-[40vw] w-[40vw]"}></span>
        {!pdfSource && <div className={classNames("grid max-h-[700px] w-full",{
            "grid-cols-1 lg:grid-cols-3":editable,
            "grid-cols-1":!editable
        })}>
            <div className={"col-span-2 mx-auto my-auto"}>
                <SVG/>
            </div>
            <div className={"col-span-1 p-2"}>
                <ScrollPanel style={{width: '100%', height: editable ? '40vh':'10vh'}}>
                    {editable ? <Tree value={carPartsNode} filter filterMode="lenient"
                                      filterPlaceholder="Seçmek İstediğiniz Alanın İsmini Yazınız"
                                      selectionKeys={selectedParts}
                                      onSelectionChange={onSelectionChange} selectionMode="checkbox"
                                      className="w-full md:w-30rem"/> : <>
                        <div className={"flex flex-col"}>
                            <div className={"flex flex-col"}>
                                {value.map((key) => {
                                    return <div key={key} className={"flex justify-between"}>
                                        <div className={"flex gap-x-2 items-center"}><div className={"w-2 h-2 rounded-full"} style={{
                                            backgroundColor: String(key).includes("body") ? partColors.body_hover : partColors.window_hover
                                        }}> </div> {carParts[key]}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </>}
                </ScrollPanel>
            </div>
        </div>}
        {pdfSource && <SVG/>}
    </>
}
export default CarBody;
