canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


car1_width = 120;
car1_height = 70;
car1_image = "car1.png"
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png"
car2_x = 10;
car2_y = 10;

background_image = "racing.jpg"

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadcar1;
    car_imgTag.src = car1_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        car1_up();
        console.log("up");

    }

    if(keyPressed == '40')
    {
        car1_down();
        console.log("down");

    }

    if(keyPressed == '37')
    {
        car1_left();
        console.log("left");
    }

    if(keyPressed == '39')
    {
        car1_right();
        console.log("right");
    }

    if(keyPressed == '38')
    {
        car2_up();
        console.log("up");

    }

    if(keyPressed == '40')
    {
        car2_down();
        console.log("down");

    }

    if(keyPressed == '37')
    {
        car2_left();
        console.log("left");
    }

    if(keyPressed == '39')
    {
        car2_right();
        console.log("right");
    }

}