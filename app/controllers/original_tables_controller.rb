class OriginalTablesController < ApplicationController
  def index
    @table = {
      headers: %i[ID 名前 年齢 その他],
      rows: [
          [1, '倉澤', 29, 'ほげ'],
          [2, 'Test', 19, 'TEST'],
          [3, 'テスト', 30, 1234],
          [4, 'たろう', 29, '太郎'],
      ],
      default_sort: 1
    }
  end
end