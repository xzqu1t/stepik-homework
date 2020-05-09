window.onload = function () {
    document.querySelector('.tabs-header').addEventListener('click', fTabs);

    function fTabs(event) {
        console.log(event);
        if (event.target.className == 'tab-h') {
            //Номер вкладки массива
            var dataTab = event.target.getAttribute('data-tab');
            //кол-во всех вкладок с содержимым
            var tabBody = document.getElementsByClassName('tab-b');
            for (var i = 0; i < tabBody.length; i++) {
                if (dataTab == i) {
                    tabBody[i].style.display = 'block';
                } else {
                    tabBody[i].style.display = 'none';
                }
            }
        }
    }
}
