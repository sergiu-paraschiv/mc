from fabric.api import *

env.hosts = ['pi@192.168.1.106']

def deploy():
    code_path = '/home/pi/MC'
    with cd(code_path):
        run('git pull')
