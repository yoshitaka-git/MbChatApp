//****************************************************************
//  MbTapGameApp
//  js/mb.js
//  Created by Natsumo Ikeda on 2020/09/10.
//  Copyright 2020 FUJITSU CLOUD TECHNOLOGIES LIMITED All Rights Reserved.
//****************************************************************

// カレントユーザー
var currentUser = null;

// [NCMB] APIキーの設定
var  applicationKey = "YOUR_NCMB_APPLICATION_KEY";
var clientKey = "YOUR_NCMB_CLIENT_KEY";

// [NCMB] SDKの初期化
var ncmb = new NCMB(applicationKey, clientKey);

// [NCMB] 「新規ユーザーを登録」ボタン押下時の処理
function signUp() {
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;

    // **********【虫食い：その１】新規ユーザー登録の実装 *************
    




















    // ********************************************************

}

// [NCMB] 「ログイン」ボタン押下時の処理
function login() {
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;

    // **************【虫食い：その２】ログインの実装 ****************
    










    // ********************************************************

}

// [NCMB] 「ログアウト」ボタン押下時の処理
function logout() {
    // *************【虫食い：その３】ログアウトの実装 ***************
    











    // ********************************************************

}

// 掲示板画面読み込み時に実行する処理
function init(){
    // ***********【虫食い：その４】カレントユーザーの取得 ************
    
    
    // ********************************************************
    load();
}

// メッセージ「送信」ボタン押下時の処理
function send() {
    // メッセージフォームから値を取得
    var message = document.getElementById("message").value;
    // [NCMB] メッセージ保存クラス生成
    var Chat = ncmb.DataStore("Chat");
    // [NCMB] 保存クラスのインスタンスを生成
    var chat =  new Chat();

    // ***************【虫食い：その５】参照権限の設定 ***************
    




    // ********************************************************

    // ****【虫食い：その６】参照権限とポインタを設定してデータを保存 *****
    














    // ********************************************************

}

// メッセージを取得して画面に反映する処理
function load() {
    // 掲示板画面の初期化
    document.getElementById("chat").innerHTML = null;
    // [NCMB] メッセージ保存クラス生成
    var chat = ncmb.DataStore("Chat");
    // *************【虫食い：その７】メッセージデータの取得 ***************
    












    // ********************************************************
}
