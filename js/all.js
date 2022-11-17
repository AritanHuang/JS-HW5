let data = [
    {
        "id": 0,
        "name": "肥宅心碎賞櫻3日",
        "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
        "area": "高雄",
        "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
        "group": 87,
        "price": 1400,
        "rate": 10
    },
    {
        "id": 1,
        "name": "貓空纜車雙程票",
        "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台北",
        "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
        "group": 99,
        "price": 240,
        "rate": 2
    },
    {
        "id": 2,
        "name": "台中谷關溫泉會1日",
        "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台中",
        "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
        "group": 20,
        "price": 1765,
        "rate": 7
    }
];
//初始資料渲染
const ticketCard = document.querySelector('.ticketCard-area');
const searchResult = document.querySelector('#searchResult-text');
function showData(data) {
    let str = '';
    data.forEach(function (value, index) {
        str += `<li class="ticketCard">
    <div class="ticketCard-img">
        <a href="#">
            <img src="${value.imgUrl}"
                alt="">
        </a>
        <div class="ticketCard-region">${value.area}</div>
        <div class="ticketCard-rank">${value.rate}</div>
    </div>
    <div class="ticketCard-content">
        <div>
            <h3>
                <a href="#" class="ticketCard-name">${value.name}</a>
            </h3>
            <p class="ticketCard-description">
                ${value.description}
            </p>
        </div>
        <div class="ticketCard-info">
            <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num"> ${value.group} </span> 組
            </p>
            <p class="ticketCard-price">
                TWD <span id="ticketCard-price">$${value.price}</span>
            </p>
        </div>
    </div>
</li>`;
    })
    ticketCard.innerHTML = str;
    searchResult.textContent = `本次搜尋共 ${data.length} 筆資料`;
}
showData(data);
//資料篩選邏輯
const regionSearch = document.querySelector('.regionSearch');
regionSearch.addEventListener('change', function (e) {
    let str = '';
    let infoNum = 0;
    data.forEach(function (value, index) {
        if (regionSearch.value == value.area) {
            str += `<li class="ticketCard">
            <div class="ticketCard-img">
                <a href="#">
                    <img src="${value.imgUrl}"
                        alt="">
                </a>
                <div class="ticketCard-region">${value.area}</div>
                <div class="ticketCard-rank">${value.rate}</div>
            </div>
            <div class="ticketCard-content">
                <div>
                    <h3>
                        <a href="#" class="ticketCard-name">${value.name}</a>
                    </h3>
                    <p class="ticketCard-description">
                        ${value.description}
                    </p>
                </div>
                <div class="ticketCard-info">
                    <p class="ticketCard-num">
                        <span><i class="fas fa-exclamation-circle"></i></span>
                        剩下最後 <span id="ticketCard-num"> ${value.group} </span> 組
                    </p>
                    <p class="ticketCard-price">
                        TWD <span id="ticketCard-price">$${value.price}</span>
                    </p>
                </div>
            </div>
        </li>`;
            infoNum += 1;
        }
        else if (regionSearch.value === '') {
            str += `<li class="ticketCard">
            <div class="ticketCard-img">
                <a href="#">
                    <img src="${value.imgUrl}"
                        alt="">
                </a>
                <div class="ticketCard-region">${value.area}</div>
                <div class="ticketCard-rank">${value.rate}</div>
            </div>
            <div class="ticketCard-content">
                <div>
                    <h3>
                        <a href="#" class="ticketCard-name">${value.name}</a>
                    </h3>
                    <p class="ticketCard-description">
                        ${value.description}
                    </p>
                </div>
                <div class="ticketCard-info">
                    <p class="ticketCard-num">
                        <span><i class="fas fa-exclamation-circle"></i></span>
                        剩下最後 <span id="ticketCard-num"> ${value.group} </span> 組
                    </p>
                    <p class="ticketCard-price">
                        TWD <span id="ticketCard-price">$${value.price}</span>
                    </p>
                </div>
            </div>
        </li>`;
            infoNum += 1;
        }
    })
    ticketCard.innerHTML = str;
    searchResult.textContent = `本次搜尋共 ${infoNum} 筆資料`;
    //查無關鍵字判斷
    const cantFind = document.querySelector('.cantFind-area');
    if (infoNum === 0) {
        cantFind.style.display = 'block';
    }
    else {
        cantFind.style.display = 'none';
    }
})
//新增資料邏輯
const ticketName = document.querySelector('#ticketName');
const ticketImgUrl = document.querySelector('#ticketImgUrl');
const ticketRegion = document.querySelector('#ticketRegion');
const ticketPrice = document.querySelector('#ticketPrice');
const ticketNum = document.querySelector('#ticketNum');
const ticketRate = document.querySelector('#ticketRate');
const ticketDescription = document.querySelector('#ticketDescription');
const addTicket = document.querySelector('.addTicket-btn');
const addTicketForm = document.querySelector('.addTicket-form');
addTicket.addEventListener('click', function (e) {
    let obj = {};
    if (ticketName.value == '' || ticketImgUrl.value == '' || ticketRegion.value == '' || ticketDescription.value == '' || ticketNum.value == '' || ticketPrice.value == '' || ticketRate.value == '') {
        addTicketForm.reset();
        Swal.fire(
            '缺少資料!',
            '資料填寫不完整，請檢查是否有遺漏!',
            'error'
        );
    }
    else {
        obj.name = ticketName.value;
        obj.imgUrl = ticketImgUrl.value;
        obj.area = ticketRegion.value;
        obj.description = ticketDescription.value;
        obj.group = parseInt(ticketNum.value);
        obj.price = parseInt(ticketPrice.value);
        obj.rate = parseInt(ticketRate.value);
        data.push(obj);
        showData(data);
        addTicketForm.reset();
        Swal.fire(
            '成功!',
            '成功新增一筆資料!',
            'success'
        );
    }
});

