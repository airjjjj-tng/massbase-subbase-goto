import os
import json
import subprocess
import requests

TOKEN = "nfp_ydGqj5EcidbgCHJLD3rPyb4GmNiwVuCkba5e"
HEADERS = {"Authorization": f"Bearer {TOKEN}"}
SITE_NAME = "massbase-subbase-goto"
CUSTOM_DOMAIN = "base-goto.com"
BUILD_DIR = "."

def main():
    print("1. Creating Netlify site via API...")
    res = requests.post("https://api.netlify.com/api/v1/sites", headers=HEADERS, json={"name": SITE_NAME})
    
    if res.status_code == 422:
        print("Site name already exists. Looking up site ID...")
        sites = requests.get("https://api.netlify.com/api/v1/sites", headers=HEADERS).json()
        site_data = next((s for s in sites if s["name"] == SITE_NAME or s.get("custom_domain") == CUSTOM_DOMAIN), None)
        if not site_data:
            res = requests.post("https://api.netlify.com/api/v1/sites", headers=HEADERS)
            site_data = res.json()
    else:
        res.raise_for_status()
        site_data = res.json()
        
    site_id = site_data["id"]
    print(f"Site ID: {site_id}")
    
    print("2. Configuring local netlify state...")
    os.makedirs(".netlify", exist_ok=True)
    with open(".netlify/state.json", "w") as f:
        json.dump({"siteId": site_id}, f)
        
    print("3. Deploying to Netlify using CLI...")
    os.environ["NETLIFY_AUTH_TOKEN"] = TOKEN
    
    cmd = ["npx.cmd", "netlify-cli", "deploy", "--prod", "--dir", BUILD_DIR]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print("Deploy failed:")
        print(result.stdout)
        print(result.stderr)
        return
    else:
        print("Deploy successful!")
        print(result.stdout)
        
    print(f"4. Setting custom domain to {CUSTOM_DOMAIN}...")
    res = requests.put(f"https://api.netlify.com/api/v1/sites/{site_id}", headers=HEADERS, json={"custom_domain": CUSTOM_DOMAIN})
    res.raise_for_status()
    print("Custom domain set successfully!")
    print("All done!")

if __name__ == "__main__":
    main()
