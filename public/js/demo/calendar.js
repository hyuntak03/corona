var date = ["2019.12.01", "2019.12.31", "2020.01.09", "2020.01.20", "2020.01.23", "2020.01.30"
    , "2020.01.31", "2020.02.03", "2020.02.15", "2020.02.17", "2020.02.20", "2020.02.21", "2020.02.23"
    , "2020.02.26", "2020.03.02", "2020.03.05"]

var action = ["중국 우환에서 최초 환자 발병", "WHO는 원인 불명의 폐렴이 우환 지역에서 발병되고 있다는 사실 보고받음"
    , "원인불명 폐렴이 신종 코로나 바이러스로 확인", "국내 첫 확진자 발생", "우환 봉쇄령", "WHO 신종 코로나 비상사태 선언"
    , "우환 교민 1차 귀국", "우환 교민 2차 귀국", "신규환자 닷재째 0명(확진 28,퇴원 7)", "대구에서 해외 여행력 없는 31번째 확진자 발생"
    , "청도 대남병원 확진자 사망", "정부 대구와 청도군 '감염병 특별 관리지역' 지정", "교육부 전국 유초중고 개학 1주일 연기"
    , "확진자 1000 돌파", "개학 2주일 추가 연기", "마스크 5부제 발표"]


var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
var now_year = year + "." + month + "." + day;

var count = 0;

function start() {
    document.getElementById("date").innerText = date[count];
    document.getElementById("action").innerText = action[count];
}

function next() {
    if (date[count + 1] == null) {
        document.getElementById("date").innerText = now_year;
        document.getElementById("action").innerText = "아직 업데이트 된 소식이 없습니다.";
    } else {
        count += 1;
        document.getElementById("date").innerText = date[count];
        document.getElementById("action").innerText = action[count];
    }
}

function previous() {
    if (date[count-1] == null) {
        alert("이전의 사건은 없습니다.")
    } else {
        count -= 1;
        document.getElementById("date").innerText = date[count];
        document.getElementById("action").innerText = action[count];
    }
}

start();