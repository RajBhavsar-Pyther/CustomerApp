import os, fnmatch
for path, dirs, files in os.walk(os.path.abspath(r"/Users/apple/Desktop/BLIV_Club_App")):
    for filename in fnmatch.filter(files, "*.apk"):
        uploadFile=filename
        print(uploadFile)