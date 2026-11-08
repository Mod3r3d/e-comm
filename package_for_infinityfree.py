import os, zipfile, sys

sys.stdout.reconfigure(encoding='utf-8')

# List of files and folders to include in deploy package for InfinityFree htdocs
INCLUDE_ROOT_FILES = [
    '.htaccess',
    'index.php',
    'index.html',
    'shop.html',
    'product-detail.html',
    'cart.html',
    'checkout.html',
    'account.html',
    'auth.html',
    'login.html',
    'wishlist.html',
    'blog.html'
]

INCLUDE_DIRS = [
    'assets',
    'components',
    'database'
]

OUTPUT_ZIP = 'woodluxe-infinityfree-deploy.zip'

if os.path.exists(OUTPUT_ZIP):
    os.remove(OUTPUT_ZIP)

with zipfile.ZipFile(OUTPUT_ZIP, 'w', zipfile.ZIP_DEFLATED) as zipf:
    # 1. Add root files
    for f in INCLUDE_ROOT_FILES:
        if os.path.exists(f):
            zipf.write(f, f)
            print(f'Added: {f}')
        else:
            print(f'Warning: {f} not found!')

    # 2. Add directories
    for d in INCLUDE_DIRS:
        for root, dirs, files in os.walk(d):
            for file in files:
                # Skip temporary or git files
                if file.endswith(('.tmp', '.bak', '.gitkeep')) or file.startswith('.'):
                    continue
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, '.')
                zipf.write(file_path, arcname)
                print(f'Added: {arcname}')

zip_size_mb = os.path.getsize(OUTPUT_ZIP) / (1024 * 1024)
print(f'\nSUCCESS: Created {OUTPUT_ZIP} ({zip_size_mb:.2f} MB)')
print('Ready to upload directly into InfinityFree htdocs!')

