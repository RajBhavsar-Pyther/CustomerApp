import os, fnmatch
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive

for path, dirs, files in os.walk(os.path.abspath(r"/Users/apple/Desktop/BLIV_Mobileapps/club")):
    for filename in fnmatch.filter(files, "*.aab"):
        uploadFile=filename
# Authentication
gauth = GoogleAuth()
gauth.LocalWebserverAuth()
drive = GoogleDrive(gauth)
                    
upload_file_list = [uploadFile]
for upload_file in upload_file_list:
    file = drive.CreateFile({
        'title': upload_file,
        'mimeType':'application/vnd.android.package-archive or application/octet-stream',
        'parents': [{
            'kind': 'drive#fileLink', 
            'id': '1GYCahN1rsLCiiHVNnkfV8aNizdnA7JhL'
        }]
    })
    file.SetContentFile(upload_file)
    file.Upload()
    print("File '"+ uploadFile +"' successfully uploaded.")
    os.remove(uploadFile)        

print("Removed '"+upload_file_list[0]+"'from BLIV_Mobileapps")
exit()   