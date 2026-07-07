const targetDate = new Date("August 15, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = targetDate - now;


    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}


setInterval(updateCountdown, 1000);

updateCountdown();

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration = 
    (5 + Math.random() * 5) + "s";

    document.body.appendChild(petal);


    setTimeout(() => {
        petal.remove();
    }, 10000);

}


setInterval(createPetal, 500);

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.animationDuration =
    (3 + Math.random()*5)+"s";


    document.body.appendChild(sparkle);


    setTimeout(()=>{

        sparkle.remove();

    },8000);

}


setInterval(createSparkle,300);
