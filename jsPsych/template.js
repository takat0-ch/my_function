


const fullscreen = {
    type: jsPsychFullscreen,
    message: '<p>フルスクリーンモードにします。</p>',
    button_label: ['次へ'],
    fullscreen_mode: true
};

const end_fullscreen = {
    type: jsPsychFullscreen,
    message: '<p>フルスクリーンモードを終了します。</p>',
    button_label: '次へ',
    fullscreen_mode: false
};

const cursor_off = {
    type: jsPsychCallFunction,
    func: function () {
        document.body.style.cursor = "none";
    }
};

const cursor_on = {
    type: jsPsychCallFunction,
    func: function () {
        document.body.style.cursor = "auto";
    }
};
