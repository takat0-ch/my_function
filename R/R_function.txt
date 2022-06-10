library(gt)
gt_option <- function(data, Title){
  gt(data) %>% 
  tab_header(md(Title)) %>% 
    cols_align(align = "center", columns = everything()) %>% 
    tab_options(table.border.top.width = 0, #タイトルの上の線を消す，
                table.border.bottom.width = 0, #注の下の線を消す
                heading.title.font.size = px(16), #タイトルのフォントサイズをいい感じに
                row_group.border.bottom.width = 0, #セクション名の下の線を消す
                table_body.hlines.width = 0, # tableの中の水平線消す
                stub.border.width = 0, # stub列の中の線を消す
                column_labels.border.top.width = 3, # 変数名の行の線を黒く太く
                column_labels.border.top.color = "black", 
                column_labels.border.bottom.width = 3,
                column_labels.border.bottom.color = "black",
                table_body.border.bottom.color = "black", #テーブルの下線を黒く
                table.width = pct(60), # 程よく幅を広げる（数字で調整）
                table.background.color = "white",
                row_group.border.top.color = "black", #セクション名の上の線を消す
                row_group.border.top.width = 1 ) 
}
