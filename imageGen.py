from PIL import Image
import glob

# Get all image paths
paths = glob.glob("public/imgs/*.png")

outString = "IMAGES=["

for path in paths:
    im = Image.open(path)
    width, height = im.size
    
    outString += "{ "
    outString += "\n  src:'" + path[7:] + "',"
    outString += "\n  width:" + str(width) + ","
    outString += "\n  height:" + str(height) + "\n},"

outString = outString[:-1] + "];"
print(outString)
