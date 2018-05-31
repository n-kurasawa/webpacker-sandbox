class OriginalTablesController < ApplicationController
  def index
    @table = {
      headers: %i[ID 名前 年齢 その他],
      rows: [
          [1, '倉澤', 29, 'ほげ'],
          [2, 'テスト', 30, 'test'],
          [1, 'たろう', 22, 'taro'],
      ],
      default_sort: 1
    }
  end
end