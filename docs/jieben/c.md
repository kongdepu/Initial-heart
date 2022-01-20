---
title: C语言编程题
---

## 编程
### 求出所有水仙花数
一个三位数可以表示为abc，若其能满足条件a^3+b^3+c^3=abc,则它是水鲜花数
1. 
``` c
#include <stdio.h>
int main(void) {
    int g,b,s;
    for(b = 1; b <= 9; b++){
        for(s = 0; s <= 9; s++){
            for(g = 0; g <= 9; g++){
                if(b*b*b + s*s*s + g*g*g == b*100+s*10+g){
                    printf("%d\n", b*100+s*10+g);
                }
            }
        }
    }
}
```
2. 
``` c
#include <stdio.h>
int main(void) {
    int i,g,b,s;
    for(i = 100; i <= 999; i++){
        int g = i%10;
        int s = i%100/10;
        int b = i/100;
        if(g*g*g + s*s*s + b*b*b == i){
            printf("%d\n", i);
        }
    }
}

```
### 判断是否是质数
输入一个大于3的整数n，判定它是否是素数又称质数
``` c
#include <stdio.h>
int main(void) {
    int n,i,tip = 1;
    printf("请输入一个数"); scanf("%d", &n);
    for(i=2; i<= n-1; i++){
        if(n%i == 0){
            tip = 0;
            break;
        }else{
            tip = 1;
        }
    }
    if(tip){
        printf("%d是质数", n);
    }else{
        printf("%d不是质数", n);
    }

}
```
### 100-200之间的素数
``` c
#include <stdio.h>
int main(void) {
    int j;
    for(j =100; j <=200; j++){
        int tip = iszs(j);
        if(tip){
            printf("%d是质数\n", j);
        }
    }

}

int iszs(int n){
    int i,tip = 1;
    for(i=2; i<= n-1; i++){
        if(n%i == 0){
            tip = 0;
            break;
        }else{
            tip = 1;
        }
    }

    return tip;
}

```
### 求数组中最大值以及下标
``` c
#include <stdio.h>
int main(void) {
    int i,j,max,a[10];
    for(i=0;i<10;i++)
        scanf("%d",&a[i]);
    max=a[0];
    for(i=0;i<10;i++)
        if(a[i]>=max){
            max = a[i];
            j=i;
        }
        printf("%d\n%d",max,j);

}

```
### 使用数组输入斐波那契
斐波那契数列. 斐波那契数列指的是这样一个数列 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233，377，610，987，1597，2584，4181，6765，10946，17711，28657，46368........ 这个数列从第3项开始，每一项都等于前两项之和。
``` c
#include <stdio.h>
int main(void) {
    int i;
    int f[20]={1,1};
    for(i=2;i<20;i++){
        f[i] = f[i-2] + f[i-1];
    }

    for(i=0;i<20;i++){
        printf("%d\n", f[i]);
    }

}

```
### 买鸡
一百元买一百只
``` c
#include <stdio.h>
int main(void) {
    int i,j,x;
    for( i = 1;i<=20;i++){
        for( j = 1;j<= 33;j++){
            for ( x = 1;x<=300;x++){
                if(i*5+j*3+x/3*1==100){
                    if(i+j+x==100){
                        if(x%3==0){
                            printf("%d,%d,%d\n",i,j,x);
                        }
                    }
                }
            }
        }
    }



}

```
### 给出三角形三边，算面积
``` c
#include <stdio.h>
#include <math.h>
int main(void) {
    float a,b,c,p,m;
    printf("请输入a边");
    scanf("%f",&a);
    printf("请输入b边");
    scanf("%f",&b);
    printf("请输入c边");
    scanf("%f",&c);
    p = (a+b+c)/2;
    m = sqrt(p*(p-a)*(p-b)*(p-c));
    printf("%f",m);
}
```

### 小写转大写
``` c
#include <stdio.h>
int main(void) {
 int i = 0;
    char str[80];
    scanf("%s",&str);
    while(str[i]!='\0'){
        if(str[i]>=97 && str[i]<=126){
            str[i] = str[i]-'a'+'A';
        }
        i++;
    }
    printf("%s",str);
}
```
### 字符串数字后添加& 如 a1b2c3 = a1&b2&c3&
``` c
#include <stdio.h>
int main(void) {
    char str[80];
    scanf("%s",&str);
    for(int j = 0;str[j]!='\0';j++){
        if(str[j]>='0'&&str[j]<='9'){
            int n = 0;
            while(str[n] != '\0'){
                n++;
            }
            str[n+1] = '\0';
            for(int x=n;x>j+1;x--){
                str[x] = str[x-1];
            }
            str[j+1]='&';
        }
    }
    printf("%s",str);
}
```
### 数组倒序输出
``` c
#include <stdio.h>
int main(void) {
    int a[10];
    int x;
    srand((int)time(0));
    for(int i = 0;i<10;i++){
        a[i] = rand() % 10 + 1;
    }
    for(int i = 0;i<10;i++){
        printf("%d",a[i]);
    }
    printf("\n");
    for(int i = 0;i<10/2;i++){
        x = a[i];
        a[i] = a[9-i];
        a[9-i] = x;
    }
    for(int i = 0;i<10;i++){
        printf("%d",a[i]);
    }
}
```
### 冒泡排序随机数组
``` c
#include <stdio.h>
#include <math.h> // 数学文件头
#include<time.h>  // 时间文件头
#include<stdlib.h> // 随机数文件头
int main(void) {
    int a[10];
    int x;
    srand((int)time(0));
    for(int i = 0;i<10;i++){
        a[i] = rand() % 10;
    }
    for(int i = 0;i<10;i++){
        for(int j = i+1;j<10;j++){
            if(a[i]<a[j]){ // 升降序修改比较符号
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
        }
    }
    for(int i = 0;i<10;i++){
        printf("%d\n",a[i]);
    }
}
```
### 字符串回文
``` c
#include <stdio.h>
int main(void) {
    char str[20];
    int i = 0;
    int j = 0;
    scanf("%s",&str);
    while(str[i] != '\0'){
        i++;
    }
    i--;
    for(;j<=i;i--,j++){
        if(str[i] != str[j]){
            printf("%d\n",1);
            return 0;
        }
    }
    printf("%d\n",0);
    return 1;
}
```
### 1-256之间的回文数
``` c
#include <stdio.h>
int main(void) {
    int a,t = 1,j,m[20],k = 0;
    for(int i = 1;i<256;i++){
        a = i*i;
        for(j=0;a!=0;j++){
            m[j] = a%10;
            a = a/10;
        }
        j--;
        t = 1;
        k = 0;
        for(;j>=0;j--){
            k = k + m[j] * t;
            t = t*10;
        }
        if(k==i*i){
            printf("%d%10d",i,k);
            printf("\n");
        }
    }
}
```
### 二维数组对角线为1其他为0
``` c
#include <stdio.h>
int main(void) {
    int a[10][10];
    for(int i=0;i<10;i++){
        for(int j = 0;j<10;j++){
            if(i==j || i+j==9){
               a[i][j]=1;
            }else{
                a[i][j]=0;
            }
        }
    }
    for(int i=0;i<10;i++){
        for(int j = 0;j<10;j++){
            printf("%5d",a[i][j]);
        }
        printf("\n");
    }
}
```
