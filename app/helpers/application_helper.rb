module ApplicationHelper
  def javascript_tag(js, id, data)
    content_tag(:div, '', id: id, data: { json: data.to_json }) do
      javascript_pack_tag js
    end
  end
end
