var wiki_court = {
    'TPC': '中華民國法院制度#.E5.88.91.E4.BA.8B.E8.A3.9C.E5.84.9F.E6.B3.95.E5.BA.AD',
    'TPU': '司法院',
    'TPJ': '中華民國法院制度#.E8.81.B7.E5.8B.99.E6.B3.95.E5.BA.AD',
    'TPS': '最高法院_(中華民國)',
    'TPA': '最高行政法院_(中華民國)',
    'TPP': '公務員懲戒委員會',
    'TPH': '臺灣高等法院',
    'TPB': '臺北高等行政法院',
    'TCB': '臺中高等行政法院',
    'KSB': '高雄高等行政法院',
    'IPC': '智慧財產法院',
    'TCH': '臺灣高等法院臺中分院',
    'TNH': '臺灣高等法院臺南分院',
    'KSH': '臺灣高等法院高雄分院',
    'HLH': '臺灣高等法院花蓮分院',
    'TPD': '臺灣臺北地方法院',
    'SLD': '臺灣士林地方法院',
    'PCD': '臺灣新北地方法院',
    'ILD': '臺灣宜蘭地方法院',
    'KLD': '臺灣基隆地方法院',
    'TYD': '臺灣桃園地方法院',
    'SCD': '臺灣新竹地方法院',
    'MLD': '臺灣苗栗地方法院',
    'TCD': '臺灣臺中地方法院',
    'CHD': '臺灣彰化地方法院',
    'NTD': '臺灣南投地方法院',
    'ULD': '臺灣雲林地方法院',
    'CYD': '臺灣嘉義地方法院',
    'TND': '臺灣臺南地方法院',
    'KSD': '臺灣高雄地方法院',
    'HLD': '臺灣花蓮地方法院',
    'TTD': '臺灣臺東地方法院',
    'PTD': '臺灣屏東地方法院',
    'PHD': '臺灣澎湖地方法院',
    'KMH': '福建高等法院金門分院',
    'KMD': '福建金門地方法院',
    'LCD': '福建連江地方法院',
    'KSY': '臺灣高雄少年及家事法院',
}

var court = {
    'TPC': '司法院－刑事補償',
    'TPU': '司法院－訴願決定',
    'TPJ': '司法院職務法庭',
    'TPS': '最高法院',
    'TPA': '最高行政法院',
    'TPP': '公務員懲戒委員會',
    'TPH': '臺灣高等法院',
    'TPB': '臺北高等行政法院',
    'TCB': '臺中高等行政法院',
    'KSB': '高雄高等行政法院',
    'IPC': '智慧財產法院',
    'TCH': '臺灣高等法院 臺中分院',
    'TNH': '臺灣高等法院 臺南分院',
    'KSH': '臺灣高等法院 高雄分院',
    'HLH': '臺灣高等法院 花蓮分院',
    'TPD': '臺灣臺北地方法院',
    'SLD': '臺灣士林地方法院',
    'PCD': '臺灣新北地方法院',
    'ILD': '臺灣宜蘭地方法院',
    'KLD': '臺灣基隆地方法院',
    'TYD': '臺灣桃園地方法院',
    'SCD': '臺灣新竹地方法院',
    'MLD': '臺灣苗栗地方法院',
    'TCD': '臺灣臺中地方法院',
    'CHD': '臺灣彰化地方法院',
    'NTD': '臺灣南投地方法院',
    'ULD': '臺灣雲林地方法院',
    'CYD': '臺灣嘉義地方法院',
    'TND': '臺灣臺南地方法院',
    'KSD': '臺灣高雄地方法院',
    'HLD': '臺灣花蓮地方法院',
    'TTD': '臺灣臺東地方法院',
    'PTD': '臺灣屏東地方法院',
    'PHD': '臺灣澎湖地方法院',
    'KMH': '福建高等法院金門分院',
    'KMD': '福建金門地方法院',
    'LCD': '福建連江地方法院',
    'KSY': '臺灣高雄少年及家事法院',
};

var court_name_map = {};
var court_names = [];
for (var id in court) {
    court_name_map[court[id].replace(/ /g, '')] = id;
    court_names.push(court[id].replace(/ /g, ''));
}
court_name_map['臺灣板橋地方法院'] = 'PCD';
court_names.push('臺灣板橋地方法院');
court_names.sort(function(a, b) { return a.length < b.length ? 1 : -1; });

var getCaseType = function(name) {
    switch (name) {
        case '刑事':
            return 'M';
        case '民事':
            return 'V';
        case '行政':
        case '行政訴訟':
            return 'A';
        case '公懲':
            return 'P';
    }
}


var to_wiki_infobox = function(result){
  var output = "{{Infobox Court Case\n";
  output += " |court              = [[" + wiki_court[result['法院'].ID] + "]]\n";
  output += " |image              = Flag_of_the_Republic_of_China.svg\n";
  output += " |caption            = [[中華民國法院制度]]\n";
  output += " |date decided       = {{start date|" + result['裁判日期'].year + "|" + result['裁判日期'].month + "|" + result['裁判日期'].day + "|df=}}\n";
  output += " |citations          = " + result['裁判字號']['年'] + '年度' + result['裁判字號']['字'] + '字第' + result['裁判字號']['號'] + "號\n";
  output += " |transcripts        = [" + result['連結']['列表'] + " 裁判書]\n";
  output += " |judges             = " + result['法官'].map(function(a){ return a['姓名']; }).join(' ') + "\n";
  output += " |related actions    = [" + result['連結']['歷審案件'] + " 歷審案件]\n";
  output += "}}\n";
  return output;
};

var parse_from_print_page = function(html, url){
    var span_dom = $('<span></span>');
    span_dom.html(html);
    var result = {
        '連結': {}
    };
    var jcheck;
    var matches = url.match('jcheck=([0-9]*)');
    jcheck = matches[1];
    var body;

    $('span', span_dom).each(function(){
        var name = $(this).text();
        var value = $(this).next().text();
        if ('【裁判字號】' == name) {
            result['裁判字號'] = {
                SOURCE: value,
                '年': value.split(',')[0],
                '字': value.split(',')[1],
                '號': value.split(',')[2],
            };
        } else if ('【裁判日期】' == name) {
            result['裁判日期'] = {
                SOURCE: value,
                year: parseInt(value.substr(0, value.length -4)) + 1911,
                month: parseInt(value.substr(value.length - 4, 2)),
                day: parseInt(value.substr(-2)),
            };
        } else if ('【裁判案由】' == name) {
            result['裁判案由'] = value;
        } else if ('【裁判全文】' == name) {
            body = $('pre', span_dom).text();
        }
    });
    return parse_body(result, body, jcheck);
};

var parse_from_page = function(html){
    var span_dom = $('<span></span>');
    span_dom.html(html);
    var result = {
        '連結': {}
    };
    var jcheck;
    $('a', span_dom).each(function(){
        if ($(this).text() == '友善列印' && $(this).attr('href').match('jcheck=')) {
            var matches = $(this).attr('href').match('jcheck=([0-9]*)');
            jcheck = matches[1];
            return false;
        }
    });
    $('tr', span_dom).each(function(){
        if ($(this).children('td').length == 2) {
            name = $(this).children('td').eq(0).text();
            value = $(this).children('td').eq(1).text();
            if ('【裁判字號】' == name) {
                result['裁判字號'] = {
                    SOURCE: value,
                    '年': value.split(',')[0],
                    '字': value.split(',')[1],
                    '號': value.split(',')[2],
                };
            } else if ('【裁判日期】' == name) {
                result['裁判日期'] = {
                    SOURCE: value,
                    year: parseInt(value.substr(0, value.length -4)) + 1911,
                    month: parseInt(value.substr(value.length - 4, 2)),
                    day: parseInt(value.substr(-2)),
                };
            } else if ('【裁判案由】' == name) {
                result['裁判案由'] = value;
            } else if ('【裁判全文】' == name) {
                body = $('pre', $(this).next()).text();
            }
        }
    });
    return parse_body(result, body, jcheck);
};

var parse_history = function(html){
    var span_dom = $('<span></span>');
    span_dom.html(html);
    var records = [];

    $('tr', span_dom).each(function(){
        if ($(this).children('td').length != 5) {
            return;
        }

        var td_doms = $(this).children('td');
        var obj = {};
        var goTyped = function(court_id, year, word, no, type, court_name){
            if (type == 'H'){
                type = 'M';
            }

            obj.court_id = court_id;
            obj.year = year;
            obj.word = word;
            obj.no = no;
            obj.type = type;
            obj.court_name = court_name;
        }
        eval('(function(){' + decodeURIComponent(td_doms.eq(3).find('input').attr('onclick')) + '})()');
        var date = $.trim(td_doms.eq(2).text());
        record = {
            "法院" : { "SOURCE" : obj.court_name, "ID": obj.court_id },
            "裁判字號" : {
                    SOURCE: obj.year + '年度' + obj.word + '字第' + obj.no + '號',
                    '年': obj.year,
                    '字': obj.word,
                    '號': obj.no,
            },
            "結案日期" : {
                    SOURCE: $.trim(td_doms.eq(2).text()),
                    year: parseInt(date.split('/')[0]) + 1911,
                    month: parseInt(date.split('/')[1]),
                    day: parseInt(date.split('/')[2]),
            },
            "裁判種類" : {
                ID: obj.type
            }
        };
        record['連結'] = {
            "列表" : 'http://jirs.judicial.gov.tw/FJUD/FJUDQRY02_1.aspx?cw=1&v_court=' + encodeURIComponent(record['法院'].ID + ' ' + court[record['法院'].ID]) + '&v_sys=' + record['裁判種類'].ID + '&jud_year=' + record['裁判字號']['年'] + '&jud_case=' + encodeURIComponent(record['裁判字號']['字']) + '&jud_no=' + record['裁判字號']['號'] + '&jud_title=&keyword=&sdate=19110101&edate=99991231&searchkw='
        };
        records.push(record);
    });

    return records;
};

var parse_court = function(str){
    var result = {};
    var court_id = null;
    for (var i = 0; i < court_names.length; i ++) {
        name = court_names[i];
        if (str.indexOf(name) === 0) {
            court_id = court_name_map[name];
            result['法院'] = {
                SOURCE: name,
                ID: court_name_map[name],
            };
            break;
        }
    }
    if (court_id === null) {
        throw "找不到對應的法院";
    }
    var matches = str.substring(name.length).match(/^(刑事|民事|行政訴訟)?(簡易判決|判決|裁定)(.*)/);
    if (!matches) {
        console.log(name);
        console.log(str.substring(name.length));
        throw "無法判斷是民事、刑事";
    }

    if (!matches[1]) {
        if (court_id == 'TPA' || court_id == 'TPB' || court_id == 'TCB' || court_id == 'KSB') {
            court_type = 'A';
            court_type_source = '行政訴訟';
        }
    } else {
        court_type = getCaseType(matches[1]);
        court_type_source = matches[1];
    }
    result['裁判種類'] = {
        SOURCE: court_type_source,
        ID: court_type,
    };
    result['裁判類別'] = {
        SOURCE: matches[2],
    };

    var year_word = matches[3];
    var map = {'○': 0, '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '　': ''};
    for (var i in map) {
        year_word = year_word.replace(new RegExp(i, 'g'), map[i]);
    }
    var matches = year_word.match(/([0-9]*)年度(.*)字第([0-9]*)號/);
    if (matches) {
        var year = parseInt(matches[1], 10);
        var case_word = matches[2];
        var case_no = matches[3];
        result['裁判字號'] = {
            '年': year,
            '字': case_word,
            '號': case_no,
        };
    }

    return result;
};

var parse_body = function(result, body, jcheck){
    var lines = body.split("\n");
    court_result = parse_court(lines[0]);
    for (var i in court_result) {
        if (i == '裁判字號') continue;
        result[i] = court_result[i];
    }
    result['裁判類別']['jcheck'] = jcheck;
    
    // 處理法院
    result['連結']['歷審案件'] = 'http://jirs.judicial.gov.tw/FJUD/HISTORYSELF.aspx?selectedOwner=H&selectedCrmyy=' + result['裁判字號']['年'] + '&selectedCrmid=' + encodeURIComponent(result['裁判字號']['字']) + '&selectedCrmno=' + result['裁判字號']['號'] + '&selectedCrtid=' + result['法院'].ID;
    result['連結']['列表'] = 'http://jirs.judicial.gov.tw/FJUD/FJUDQRY02_1.aspx?cw=1&v_court=' + encodeURIComponent(result['法院'].ID + ' ' + court[result['法院'].ID]) + '&v_sys=' + result['裁判種類'].ID + '&jud_year=' + result['裁判字號']['年'] + '&jud_case=' + encodeURIComponent(result['裁判字號']['字']) + '&jud_no=' + result['裁判字號']['號'] + '&jud_title=&keyword=&sdate=19110101&edate=99991231&searchkw=';
    result['連結']['列表短網址'] = 'http://judicial.ronny.tw/' + encodeURIComponent(result['法院'].ID) + '/' + result['裁判種類'].ID + '/' + result['裁判字號']['年'] + '/' + encodeURIComponent(result['裁判字號']['字']) + '/' + result['裁判字號']['號'];

    // 找法官
    for (var i = 0; i < lines.length; i ++) {
        if (lines[i].replace(/　/g, '  ').replace(/ /g, '') == ('中華民國' + (result['裁判日期'].year - 1911) + '年' + result['裁判日期'].month + '月' + result['裁判日期'].day + '日')) {
            i ++;
            break;
        }
    }

    result['法官'] = [];
    for (; i < lines.length; i ++) {
        var trimed_line = lines[i].replace(/　/g, '  ').replace(/ /g, '');
        var matches = trimed_line.match(/(.*)法官(.*)/);
        if (!matches) {
            break;
        }
        result['法官'].push({
                '姓名': matches[2],
                '身份': matches[1] === '' ? undefined : matches[1],
        });
    }

    result['裁判全文'] = body;

    return result;
};
