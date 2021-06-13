import pyperclip as pc
import time

while (True) :
    time.sleep(1)
    a = pc.paste()
    z = a.split(' ')
    if z[0] != "!kick" :
        b = "!kick " + a
        pc.copy(b)


