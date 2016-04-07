/**
 * Created by tzr4032369 on 2016/4/7.
 */

//���ݱ�������type�����в�ͬ�ı���
var traverse = function (type) {
    //��ʼ������div�ڵ��б�
    var divList = [];
    //��ȡ���ڵ�div
    var root = document.getElementById("root");
    switch (type) {
        case 'pre':
            pre_traverse(root, divList);
            break;
        case 'in':
            in_traverse(root, divList);
            break;
        case 'post':
            post_traverse(root, divList);
            break;
        default:
    }
    //����divList��div�ڵ�˳��ʵ��div����ɫ����
    changeBgColor(divList);
};

//ǰ�����
var pre_traverse = function (node, divList) {
    if(node){
        divList.push(node);
        pre_traverse(node.firstElementChild,divList);
        pre_traverse(node.lastElementChild,divList);
    }
};

//�������
var in_traverse = function (node, divList) {
    if (node) {
        in_traverse(node.firstElementChild, divList);
        divList.push(node);
        in_traverse(node.lastElementChild, divList);
    }
};

//�������
var post_traverse = function (node, divList) {
    if (node) {
        post_traverse(node.firstElementChild, divList);
        post_traverse(node.lastElementChild, divList);
        divList.push(node);
    }
};

//���嶯�����������
var interval;

//div����ɫ����ʵ��
var changeBgColor = function (divList) {
    var length = divList.length, i = 0;
    //divList��һ��div�ڵ㱳��ɫ����
    divList[i++].style.backgroundColor = "blue";

    //��ȡ����ʱ����
    var timeInterval = document.getElementById('time').value;

    //ÿ���һ��ʱ�䣬ִ��һ�α�ɫ
    interval = setInterval(function () {
        if (i < length) {
            //��ǰ�ڵ㱳��ɫ��ذ�ɫ���¸��ڵ㱳��ɫ����
            divList[i-1].style.backgroundColor = '#fff';
            divList[i++].style.backgroundColor = "blue";
        } else {
            //�������һ���ڵ��ȡ��interval���䱳��ɫ��ذ�ɫ
            clearInterval(interval);
            divList[i-1].style.backgroundColor = '#fff';
        }
    }, timeInterval)
};