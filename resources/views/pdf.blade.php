<!DOCTYPE html>
<html>
<head>
    <title>Olex Dijital Sertifika</title>
    <style>
        @font-face {
            font-family: 'Michroma Regular';
            src: url('{{ storage_path('fonts/Michroma-Regular.ttf') }}') format('truetype');
            font-weight: normal;
            font-style: normal;
        }

        html, body {
            margin: 0;
            padding: 0;
            font-family: 'Michroma Regular', sans-serif !important;
        }

        * {
            font-family: 'Michroma Regular', sans-serif !important;
        }

        .servicePdf {
            margin: 0;
            background-color: gray;
            color: black;
            user-select: none !important;
        }

        .servicePdf .pdfPage4, .servicePdf .pdfPage2, .servicePdf .pdfPage3, .servicePdf .pdfPage1, .servicePdf .page5 {
            height: 29.7cm;
        }

        .servicePdf .pdfPage4 img, .servicePdf .pdfPage3 img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .servicePdf .pageBreak {
            page-break-before: always;
        }

        .servicePdf .pdfPage2 {
            background-color: #003f26;
            color: white;
            page-break-after: always;
        }

        .servicePdf .pdfPage2 img.logo {
            width: 3.96875cm;
            margin: 10px 8.515625cm;
            display: block;
            margin-bottom: 30px;
        }

        .servicePdf .pdfPage2 .carSvg {
            width: 100%;
            margin: 20px 0;
        }

        .servicePdf .pdfPage2 .carSvg img {
            width: 12cm !important;
            margin: 0 4.5cm;
        }

        .servicePdf .pdfPage2 .tableWrapper.noRadius {
            border-radius: 0 !important;
        }

        .servicePdf .pdfPage2 .tableWrapper {
            margin: 20px 1.3cm;
            margin-bottom: 0 !important;
            border-radius: 10px;
            overflow: hidden;
            border: 2px solid rgb(71, 162, 125);
        }

        .servicePdf .pdfPage2 table.appliedProducts {
            width: 18.4cm;
            overflow: hidden;
            border-collapse: collapse;
        }

        .servicePdf .pdfPage2 table.appliedProducts thead {
            background-color: rgb(0, 58, 34);
            color: white;
        }

        .servicePdf .pdfPage2 table.appliedProducts tbody tr {
            background-color: rgb(0, 35, 21);
        }

        .servicePdf .pdfPage2 table.appliedProducts thead td span.title {
            font-size: 24px;
            letter-spacing: 1px;
        }

        .servicePdf .pdfPage2 table.appliedProducts thead td div.container {
            padding: 6px 20px;
            width: 100%;
        }

        .servicePdf .pdfPage2 table.appliedProducts thead td div.container .title {
            font-size: 20px;
            font-weight: bold;
            display: inline;
            font-family: 'Michroma Regular' !important;
            text-align: right;
            width: 100%;
        }


        .servicePdf .pdfPage2 table.appliedProducts tbody td {
            padding: 10px 10px;
            height: 40px;
        }

        .appliedServiceTrWrapper {
            border-bottom: 1px solid rgb(0, 58, 34);
        }

        .servicePdf .pdfPage2 table.appliedProducts tbody td:last-child {
            border-right: none;
        }

        .servicePdf .pdfPage2 table.appliedProducts tbody tr:last-child {
            border-bottom: none;
        }


        .servicePdf .pdfPage2 table.appliedProducts tbody tr .tdWrapper {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }

        .servicePdf .pdfPage2 table.appliedProducts tbody tr .tdWrapper .title {
            font-size: 12px;
            font-weight: 400;
        }

        .servicePdf .pdfPage2 table.appliedProducts tbody tr .tdWrapper .namexx, .servicePdf .pdfPage2 table.appliedProducts tbody tr .tdWrapper .warranty {
            font-size: 14px;
            font-weight: 500;
        }

        .servicePdf .pdfPage2 table.appliedProducts tbody tr .tdWrapper .warranty .icon img {
            display: inline;
            fill: #002114;
            width: 15px;
        }

        .servicePdf .pdfPage2 table.appliedProducts tbody tr .tdWrapper .highlight {
            color: #f7b500;
        }

        .servicePdf .pdfPage1 {
            background-color: #003f26;
            color: white;
            position: relative;
            overflow: hidden;
            page-break-after: always; /* Sayfa sonrasında kesilir */

        }

        .servicePdf .pdfPage1 img.absoluteBrandLogo {
            width: 400px;
            position: absolute;
            top: 2cm;
            left: -150px;
            opacity: 0.5;
        }

        .servicePdf .pdfPage1 .logo {
            width: 10cm;
            display: block;
            margin: 10cm 5.5cm 5cm 5.5cm;
        }

        .servicePdf .pdfPage1 .carArea, .servicePdf .pdfPage2 .carArea {
            text-align: center; /* İçeriği ortalar */
            margin: 0 auto; /* Yatayda ortalar */
            width: fit-content;
        }

        .servicePdf .pdfPage1 .carArea .brand, .servicePdf .pdfPage2 .carArea .brand {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        .servicePdf .pdfPage1 .carArea .brand .brandLogo,
        .servicePdf .pdfPage2 .carArea .brand .brandLogo {
            height: 30px;
            object-fit: contain;
            margin-right: 10px;
        }

        .servicePdf .pdfPage1 .carArea .brand .brandName, .servicePdf .pdfPage1 .carArea .model,
        .servicePdf .pdfPage2 .carArea .brand .brandName, .servicePdf .pdfPage2 .carArea .model {
            font-size: 27px;
            font-weight: 400;
            letter-spacing: .5px;
        }

        .servicePdf .pdfPage1 .carArea .model, .servicePdf .pdfPage2 .carArea .model {
            font-size: 20px;
            font-weight: 400;
            letter-spacing: .5px;
        }

        .page_break {
            page-break-before: always;
        }
    </style>
</head>
<body>
<div class="servicePdf">
    <div class="pdfPage1">
        <img class="absoluteBrandLogo" src="{{$brandLogo}}" alt="Absolute Brand Logo">

        <img class="logo" src="{{$page4Logo}}" alt="Logo">

        <div class="carArea">
            <div class="brand">
                <img class="brandLogo" src="{{$brandLogo}}" alt="Brand Logo">
                <span class="brandName">{{$brandName}}</span>
            </div>
            <span class="model">
                    {{$carModel}} {{$carGeneration}} ({{$carYear}})
                </span>
        </div>
    </div>
    <div class="pdfPage2">
        <img class="logo" src="{{$page2Logo}}" alt="Logo"/>
        <div class="carArea">
            <div class="brand">
                <img class="brandLogo" src="{{$brandLogo}}" alt="Brand Logo">
                <span class="brandName">{{$brandName}}</span>
            </div>
            <span class="model">
                    {{$carModel}} {{$carGeneration}} ({{$carYear}})
                </span>
        </div>
        <div class="carSvg">
            <img src="{{$carSvg}}" alt="Car Body"/>
        </div>
        <div class="tableWrapper">
            <table class="appliedProducts">
                <thead>
                <tr>
                    <td colspan="3">
                        <div style="padding: 15px 20px; height: 50px;">
                            <img src="{{$page2TableLogo}}"
                                 style="height:50px; float:left; display:block;"
                                 alt="Logo">
                            <span class="title" style="float:right;">Uygulanan Hizmetler</span>
                        </div>
                    </td>
                </tr>
                </thead>
                <tbody>
                @foreach($appliedServices as $service)
                    <tr class="appliedServiceTrWrapper">
                        <td>
                            <div class="tdWrapper">
                                <div class="title">Kategori:</div>
                                <span class="namexx">{{ $service['category'] }}</span>
                            </div>
                        </td>
                        <td>
                            <div class="tdWrapper">
                                <div class="title">Ürün: <span class="highlight">#{{ $service['code'] }}</span></div>
                                <span class="namexx">{{ $service['name'] }}</span>
                            </div>
                        </td>
                        <td>
                            <div class="tdWrapper">
                                <div class="title">Garanti:</div>
                                <span class="warranty">
                                    {{ $service['warranty'] }}
                                    <span class="icon">
                                        <img src="{{$page2Check}}" alt="check icon">
                                    </span>
                                </span>
                            </div>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
    <div class="pdfPage3">
        <img src="{{$page3}}" alt="Page3">
    </div>
    <div class="pdfPage4">
        <img src="{{$page4}}" alt="Page">
    </div>
</div>
</body>
</html>
