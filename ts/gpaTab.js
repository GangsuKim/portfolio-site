let active = '1-1'; // 현재 활성화 되어 있는 Board의 Season
let lang = 'kr'; // 언어 사전 설정
const gpa_tab = document.querySelectorAll('.gpa-tab'); // Tab elements
for (var i = 0; i < gpa_tab.length; i++) { // Tab의 개수만큼 실행 (8회)
    gpa_tab[i].addEventListener('click', (e) => {
        if (e.target instanceof HTMLElement) {
            var season = e.target.innerHTML;
            if (e.target.localName == 'li') {
                season = e.target.id;
            }
            changeBoardTo(season); // Board를 변경하는 함수 실행 (param : season)
        }
    });
}
function changeBoardTo(season) {
    $.getJSON('../json/' + season + '.json', function (data) {
        $('.boardTitle').text(data['season_' + lang]); // 학기 표시 (ex. 1학년 1학기)
        $('.gpaCount').text(data['course-count']); // 수강 학점 표시 (ex. 16)
        let html = ''; // Table HTML stack
        for (var i = 0; i < data['course'].length; i++) {
            const course = data.course[i];
            let styleSet = '';
            if (course["name_" + lang].length > 20) {
                styleSet = 'style="font-size: 80%;"';
            }
            else if (course["name_" + lang].length > 30) {
                styleSet = 'style="font-size: 60%;"';
            }
            html += '<tr><td>' + course["type_" + lang] + '</td><td ' + styleSet + '>' + course["name_" + lang] + '</td><td>' + course["credit"] + '</td><td>' + course["grade"] + '</td></tr>';
        }
        $('.board > table > tbody').html(html);
        $('#' + active).removeClass('selected');
        $('#' + season).addClass('selected');
        active = season;
    });
}
