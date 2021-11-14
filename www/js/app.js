//****************************************************************
//  MbTapGameApp
//  js/app.js
//  Created by Natsumo Ikeda on 2020/09/10.
//  Copyright 2020 FUJITSU CLOUD TECHNOLOGIES LIMITED All Rights Reserved.
//****************************************************************

// パスワード開示/非開示の処理
function passwordCheck(checked) {
    var pwd = document.getElementById("password");
    if(checked) {
        pwd.setAttribute("type", "text");
    } else {
        pwd.setAttribute("type", "password");
    }
}

// 「更新」ボタン押下時の処理
function reload() {
    // 画面更新
    load();
}

// 画面に吹き出し（メッセージ）を掲示する処理
function setData(records) {
    for (var i = records.length - 1; i >= 0 ; i--){
        // [NCMB] データからnameフィールドの値を取得
        var name = records[i].get("user").userName;
        // [NCMB] データからnameフィールドの値を取得
        var message = records[i].get("message");
        // [NCMB] データからcreateDateフィールドの値を取得
        var date = new Date(records[i].get("createDate"));

        // createDateを文字列に変換
        var timeStamp = " (";
        timeStamp += date.getFullYear() + "-";
        timeStamp += ((date.getMonth() < 10) ? "0" : "") + date.getMonth() + "-";
        timeStamp += ((date.getDate() < 10) ? "0" : "") + date.getDate() + " ";
        timeStamp += ((date.getHours() < 10) ? "0" : "") + date.getHours()  + ":";
        timeStamp += ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes() + ":";
        timeStamp += ((date.getSeconds() < 10) ? "0" : "") + date.getSeconds();
        timeStamp += ")";

        // 吹き出しの生成
        var message_dom = document.createElement("li"); // メッセージ部分
        message_dom.classList.add("box");
        var info_dom = document.createElement("li"); // ユーザー名と日付部分 
        info_dom.setAttribute("size","-2");
        if (name == currentUser.userName) {
            // 右吹き出しを作成
            message_dom.classList.add("box-right");
            info_dom.setAttribute("align","right");
        } else {
            // 左吹き出しを作成
            message_dom.classList.add("box-left");            
            info_dom.setAttribute("align","left");
        }
        // 投稿内容を記載
        info_dom.textContent = name + " " + timeStamp;
        message_dom.textContent = message;
        // 投稿内容をチャットエリアに追記
        document.getElementById("chat").appendChild(info_dom);
        document.getElementById("chat").appendChild(message_dom);
    }
}
