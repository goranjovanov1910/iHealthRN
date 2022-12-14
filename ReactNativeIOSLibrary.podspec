
Pod::Spec.new do |s|
  s.name         = "ReactNativeIOSLibrary"
  s.version      = "1.0.0"
  s.summary      = "ReactNativeIOSLibrary"
  s.description  = <<-DESC
                  ReactNativeIOSLibrary
                   DESC
  s.homepage     = "https://dev.ihealthlabs.com"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNUtils.git", :tag => "master" }
  s.source_files  = "ios/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  
