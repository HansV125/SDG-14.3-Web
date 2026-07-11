import re, os

pages_dir = "/home/claude/build/public/pages"
files = ["index.html", "empati.html", "ideasi.html", "prototipe.html", "pengujian.html", "refleksi.html"]

nav_map = {
    'beranda': '/',
    '17 sdgs': '/#sdg-intro',
    'empati': '/empati',
    'ide': '/ideasi',
    'prototipe': '/prototipe',
    'pengujian': '/pengujian',
    'refleksi': '/refleksi',
}

a_pattern = re.compile(r'(<a\s+class="[^"]*"\s+href=")#("\s*>)(\s*)([^<]+?)(\s*</a>)')

def fix_anchors(html):
    def repl(m):
        pre, mid, ws1, label, ws2 = m.groups()
        key = label.strip().lower()
        if key in nav_map:
            return f'{pre}{nav_map[key]}{mid}{ws1}{label}{ws2}'
        return m.group(0)
    return a_pattern.sub(repl, html)

button_pattern = re.compile(
    r'<button(\s+class="[^"]*")>\s*(REFLEKSI|Refleksi)\s*</button>'
)

def fix_button(html):
    def repl(m):
        cls, label = m.groups()
        cls_val = cls.strip()[len('class="'):-1]
        cls_val += ' inline-block text-center'
        return f'<a class="{cls_val}" href="/refleksi">{label}</a>'
    return button_pattern.sub(repl, html)

for fname in files:
    path = os.path.join(pages_dir, fname)
    with open(path, encoding='utf-8') as f:
        html = f.read()
    before = html
    html = fix_anchors(html)
    html = fix_button(html)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    changed = sum(1 for a,b in zip(before, html) if a != b) if len(before)==len(html) else 'len-diff'
    print(fname, "modified" if html != before else "NO CHANGE")
