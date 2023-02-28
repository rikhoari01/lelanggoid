document.addEventListener('alpine:init', () => {
    Alpine.data('slider', () => ({
        currentIndex: 1,
        images: [
            'https://file.lelangdjkn.kemenkeu.go.id/lelang-foto-full/SLIDER/2022/11/17/6375ff56ac1cd-22854Mm6-slider-d-3.jpg',
            'https://file.lelangdjkn.kemenkeu.go.id/lelang-foto-full/SLIDER/2021/12/07/61af8797903e8-507846Md-slider-min.jpg',
            'https://file.lelangdjkn.kemenkeu.go.id/lelang-foto-full/SLIDER/2021/12/07/61af87b0709ee-66849TbC-slider-min.jpg'
        ],
        back() {
            if (this.currentIndex > 1) {
                this.currentIndex = this.currentIndex - 1;
            }
        },
        next() {
            if (this.currentIndex < this.images.length) {
                this.currentIndex = this.currentIndex + 1;
            } else if (this.currentIndex <= this.images.length){
                this.currentIndex = this.images.length - this.currentIndex + 1
            }
        },
    }))
})

const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');
menuBtn.addEventListener('click', () => {
    if (menuList.classList.contains('left-[-100%]'))
    {
        menuList.classList.remove('left-[-100%]');
        menuList.classList.add('left-0');
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-times');
    } else
    {
        menuList.classList.remove('left-0');
        menuList.classList.add('left-[-100%]');
        menuBtn.classList.add('fa-bars');
        menuBtn.classList.remove('fa-times');
    }
    
})

setInterval(showTime, 1000);
function showTime() {
    let now = new Date();
    let date = now.getDate();
    let month = now.getUTCMonth();
    let year = now.getFullYear();
    let hour = now.getHours();
    let min = now.getMinutes();

    const monthNames = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
    // let sec = now.getSeconds();
    // am_pm = "AM";

    // if (hour > 12) {
    //     hour -= 12;
    //     am_pm = "PM";
    // }
    // if (hour == 0) {
    //     hr = 12;
    //     am_pm = "AM";
    // }

    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    // sec = sec < 10 ? "0" + sec : sec;

    // let current = date + month + year + ", " + hour + ":" + min;
    let current = `${date} ${monthNames[month]} ${year}, ${hour}:${min}`;

    document.getElementById("time-server-text").innerHTML = current;

    document.getElementById('year').innerHTML = year;
}
showTime();

const timeBtn = document.getElementById('time-server');
const refreshBtn = document.getElementById('refresh-time');
timeBtn.addEventListener('click', () => {
    const timeText = document.getElementById('time-server-content');
    if (timeText.classList.contains('hidden'))
    {
        // timeBtn.classList.remove('py-3');
        // timeBtn.classList.add('py-2');
        timeText.classList.remove('hidden');
        timeText.classList.add('inline-block');
    } else
    {
        refreshBtn.addEventListener('click', () => {
            showTime();
        });
        // timeBtn.classList.add('py-3');
        // timeBtn.classList.remove('py-2');
        timeText.classList.add('hidden');
        timeText.classList.remove('inline-block');
    }
});
refreshBtn.addEventListener('click', () => {
    showTime();
});

const filterMobile = document.getElementById('filter-nav-mobile');
function filterMobileScroll() {
    if(document.body.scrollTop > 865 || document.documentElement.scrollTop > 865) 
    {
        filterMobile.classList.remove('invisible');
        filterMobile.classList.add('visible');
    } else
    {
        filterMobile.classList.add('invisible');
        filterMobile.classList.remove('visible');
    }
}

const filter = document.getElementById('filter-nav');
function filterScroll() {
    if(document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) 
    {
        filter.classList.remove('invisible');
        filter.classList.add('visible');
    } else
    {
        filter.classList.add('invisible');
        filter.classList.remove('visible');
    }
}

window.onscroll = function () {
    filterMobileScroll();
    filterScroll();
  };