var num = (Math.ceil(Math.random()*100));
console.log(num);
var count=1;
function findNumber()
{
    var userNum=parseInt(document.getElementById("n").value);
    if(userNum==num)
    {
      document.getElementById("res").textContent="Congratulations!!!You Guessed the number in "+count+ "tries";
    }
    else if(userNum>num)
    {
        document.getElementById("res").textContent="Try with smaller number";
    }
    else
    {
      document.getElementById("res").textContent="Try with Greater number";
    }
    document.getElementById("tries").textContent=count;
count++;
}