$(document).ready(function() {
    let active = '1-1'; // 현재 활성화 되어 있는 Board의 Season
    let lang = 'kr';

    const gpa_tab = document.getElementsByClassName('gpa-tab'); // Tab elements
    const board = document.getElementsByClassName('board'); // Board Element

    for(var i = 0; i < gpa_tab.length; i++) { // Tab의 개수만큼 실행 (8회)
        gpa_tab[i].addEventListener('click', (e) => { // 클릭시 Event 발생
            changeBoardTo(e.target.innerHTML); // Board를 변경하는 함수 실행 (param : season)
        });
    }

    function changeBoardTo(season) { // Board를 변경하는 함수
        $.getJSON('../json/' + season + '.json', function(data) {
            $('.boardTitle').text(data['season_' + lang]);
            $('.gpaCount').text(data['course-count']);

            let html = '';
            for(var i = 0; i < data['course'].length; i++) {
                const course = data.course[i];
                html += '<tr><td>' + course["type_kr"] + '</td><td>' + course["name_kr"] + '</td><td>' + course["credit"] + '</td><td>' + course["grade"] + '</td></tr>';
            }
            $('.board > table > tbody').html(html);

            $('#' + active).getElementsByClassName()
        })
    }
})