const sect = document.getElementById('main');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
function toggle()
{
    if (sect.style.display == 'none')
    {
        sect.style.display = 'block';
        btn.innerHTML = "Hide";
        btn1.style.display = 'block';
    }
    else
    {
        sect.style.display = 'none';
        btn.innerHTML = "Show";
        btn1.style.display = 'none';
    }
}
function toggle1()
{
    if (btn1.innerHTML == 'Dark')
    {
        sect.style.backgroundColor = '#282A36';
        sect.style.color = '#F8F8F2';
        sect.style.fontWeight = '400';
        btn1.innerHTML = 'Light';
    }
    else
    {
        sect.style.backgroundColor = 'white';
        sect.style.color = 'black';
        btn1.innerHTML = 'Dark';
    }
}