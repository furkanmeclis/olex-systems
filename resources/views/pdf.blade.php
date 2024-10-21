<!DOCTYPE html>
<html>
<head>
    <title>Olex Dijital Sertifikas</title>
    <style>
        @font-face {
            font-family: 'Avaganti Regular';
            src: url('{{ storage_path('fonts/Avaganti Regular.ttf') }}') format('truetype');
        }

        html, body {
            margin: 0;
            padding: 0;
        }

        *, span, div, p, h1, h2, h3, h4, h5, h6, b {
            font-family: Avaganti Regular !important;
        }

        .servicePdf {
            margin: 0;
            background-color: white;
            color: black;
            user-select: none !important;
        }

        .servicePdf .page1, .servicePdf .page2, .servicePdf .page3, .servicePdf .page4, .servicePdf .page5 {
            height: 29.7cm;
        }

        .servicePdf .page1 img, .servicePdf .page3 img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .servicePdf .pageBreak {
            page-break-before: always;
        }

        .servicePdf .page2 {
            background-color: #003f26;
            color: white;
            page-break-after: always;
        }

        .servicePdf .page2 img.logo {
            width: 3.96875cm;
            margin: 10px 8.515625cm;
            display: block;
            margin-bottom: 30px;
        }

        .servicePdf .page2 .carSvg {
            width: 100%;
            margin: 20px 0;
        }

        .servicePdf .page2 .carSvg img {
            width: 16.8cm !important;
            margin: 0 2.1cm;
        }

        .servicePdf .page2 .tableWrapper.noRadius {
            border-radius: 0 !important;
        }

        .servicePdf .page2 .tableWrapper {
            margin: 20px 1.3cm;
            border-radius: 10px;
            overflow: hidden;
            border: 2px solid #1a4c61;
        }

        .servicePdf .page2 table.appliedProducts {
            width: 18.4cm;
            border-radius: 13px;

        }

        .servicePdf .page2 table.appliedProducts thead {
            background-color: #052a25;
            color: white;
        }

        .servicePdf .page2 table.appliedProducts thead td span.title {
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 1px;
        }

        .servicePdf .page2 table.appliedProducts thead td div.container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 3px 20px;
        }

        .servicePdf .page2 table.appliedProducts thead td img {
            height: 60px;
            margin: 0 !important;
            text-align: left;
            margin-top: 10px;
            width: unset !important;
        }

        .servicePdf .page2 table.appliedProducts thead tr {
            border-bottom: 2px solid #1a4c61;
        }

        .servicePdf .page2 table.appliedProducts tbody td {
            padding: 10px 10px;
            height: 40px;
            border-bottom: 1px solid #1a4c61;
            border-right: 2px solid #1a4c61;
        }

        .servicePdf .page2 table.appliedProducts tbody td:last-child {
            border-right: none;
        }

        .servicePdf .page2 table.appliedProducts tbody tr:last-child {
            border-bottom: none;
        }

        .servicePdf .page2 table.appliedProducts tbody tr {
            background-color: #002114;
        }

        .servicePdf .page2 table.appliedProducts tbody tr .tdWrapper {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }

        .servicePdf .page2 table.appliedProducts tbody tr .tdWrapper .title {
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 1px;
        }

        .servicePdf .page2 table.appliedProducts tbody tr .tdWrapper .namexx, .servicePdf .page2 table.appliedProducts tbody tr .tdWrapper .warranty {
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 1px;
        }

        .servicePdf .page2 table.appliedProducts tbody tr .tdWrapper .warranty .icon img {
            display: inline;
            fill: #002114;
        }

        .servicePdf .page2 table.appliedProducts tbody tr .tdWrapper .highlight {
            color: #f7b500;
        }

        .servicePdf .page4 {
            background-color: #003f26;
            color: white;
            position: relative;
            overflow: hidden;
            page-break-after: always; /* Sayfa sonrasında kesilir */

        }

        .servicePdf .page4 img.absoluteBrandLogo {
            width: 200px;
            position: absolute;
            top: 5cm;
            left: -100px;
        }

        .servicePdf .page4 .logo {
            width: 10cm;
            display: block;
            margin: 10cm 5.5cm 5cm 5.5cm;
        }

        .servicePdf .page4 .carArea, .servicePdf .page2 .carArea {
            text-align: center; /* İçeriği ortalar */
            margin: 0 auto; /* Yatayda ortalar */
            width: fit-content;
        }

        .servicePdf .page4 .carArea .brand, .servicePdf .page2 .carArea .brand {
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        .servicePdf .page4 .carArea .brand .brandLogo,
        .servicePdf .page2 .carArea .brand .brandLogo {
            height: 30px;
            object-fit: contain;
        }

        .servicePdf .page4 .carArea .brand .brandName, .servicePdf .page4 .carArea .model,
        .servicePdf .page2 .carArea .brand .brandName, .servicePdf .page2 .carArea .model {
            font-size: 34px;
            font-weight: 400;
            letter-spacing: .5px;
        }

        .page_break {
            page-break-before: always;
        }

        .boldAvagantis {
            font-weight: bold;
        }
    </style>
</head>
<body>
<div class="servicePdf">
    <div class="page4">
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
    <div class="page2">
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
                    <td colspan="3" class="tableHead">
                        <div class="container">
                            <img src="{{$page2TableLogo}}" alt="Logo">
                            <span class="title">Applied Services</span>
                        </div>
                    </td>
                </tr>
                </thead>
                <tbody>
                @foreach($appliedServices as $service)
                    <tr>
                        <td>
                            <div class="tdWrapper">
                                <div class="title">Category:</div>
                                <span class="namexx">{{ $service['category'] }}</span>
                            </div>
                        </td>
                        <td>
                            <div class="tdWrapper">
                                <div class="title">Product: <span class="highlight">#{{ $service['code'] }}</span></div>
                                <span class="namexx">{{ $service['name'] }}</span>
                            </div>
                        </td>
                        <td>
                            <div class="tdWrapper">
                                <div class="title">Warranty:</div>
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
    <div class="page3">
        <img src="{{$page3}}" alt="Page3">
    </div>
    <div class="page1">
        <img src="{{$page1}}" alt="Page1">
    </div>
</div>
</body>
</html>
