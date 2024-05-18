import cv2
import os

for filename in os.listdir('.'):
    if '.png' not in filename or 'blur' in filename: continue
    img = cv2.imread(filename)

    blur = cv2.blur(img, (10, 10))

    cv2.imwrite(filename.split('.')[0] + '_blur.png', blur)

    # cv2.imshow('test', blur, )
    # cv2.waitKey(0)