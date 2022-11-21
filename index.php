<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body{
            background-color: #000;
        }
        .container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        #canvas {
            border: #fff solid 2px;
        }
        .controls{
            display: flex;
        }
        .controls > input {
            width: 70%;

        }
        .controls > label {
            width: 25%;
            color: #fff;
            font-size: 15;
        }
        #angler {
            display: none;
        }
    </style>
</head>

<body>
    <img id="angler" src="angler.png" alt="angler">
    <div class="container">
        <canvas id="canvas"></canvas>
        <div class="controls">
            <label for="resolution" id="resLabel">Resolution 5px</label>
            <input type="range" id="resolution" name="resolution" min="1" max="20" value="5">
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>