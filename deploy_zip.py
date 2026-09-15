import os
import zipfile
import requests
import io

def zipdir(path, ziph):
    for root, dirs, files in os.walk(path):
        if '.git' in root or 'node_modules' in root or '.netlify' in root or '__pycache__' in root:
            continue
        for file in files:
            if file.endswith('.py') or file == '.gitignore':
                continue
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, path)
            ziph.write(file_path, arcname)

print("Zipping files...")
zip_buffer = io.BytesIO()
with zipfile.ZipFile(zip_buffer, 'w', zipfile.ZIP_DEFLATED) as zipf:
    zipdir('.', zipf)

print("Deploying zip to Netlify API...")
headers = {
    'Authorization': 'Bearer nfp_ydGqj5EcidbgCHJLD3rPyb4GmNiwVuCkba5e',
    'Content-Type': 'application/zip'
}
res = requests.post(
    "https://api.netlify.com/api/v1/sites/44b14072-fd74-4133-bb6b-7abb8862bd1b/deploys", 
    headers=headers, 
    data=zip_buffer.getvalue()
)
res.raise_for_status()
print("Deploy success!")
print(res.json().get('deploy_url'))
