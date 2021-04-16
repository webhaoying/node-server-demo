
DATE=`date +%Y%m%d_%H`
name="backup"
# 使用单引号拼接
result='backup'$your_name$DATE'.tar.gz'
tar -zcvf ${result} . 
scp -r ${result}  root@27.150.28.85:/var/www/html  
ssh root@27.150.28.85 

# cd /var/www/html  
# tar -zxvf ${result}   // 解压到当前文件
