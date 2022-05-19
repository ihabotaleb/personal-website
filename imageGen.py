from PIL import Image
import glob
import random

# Get all image paths
paths = glob.glob("public/imgs/*.png")

random.shuffle(paths)

imgPaths = "const IMAGES=["

for path in paths:
    im = Image.open(path)
    width, height = im.size
    
    imgPaths += "{ "
    imgPaths += "src:'" + path[7:] + "',"
    imgPaths += "width:" + str(width) + ","
    imgPaths += "height:" + str(height) + "},"

imgPaths = imgPaths[:-1] + "];\n"
print(imgPaths)

f = open("pages/portfolio.tsx", "r")
txt = f.readlines()
f.close()

del txt[7]
txt.insert(7, imgPaths)

f = open("pages/portfolio.tsx", "w")
txt = "".join(txt)
f.write(txt)
f.close()