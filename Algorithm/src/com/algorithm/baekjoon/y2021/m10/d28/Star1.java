package com.algorithm.baekjoon.y2021.m10.d28;

import java.util.Scanner;

public class Star1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        solution(n);
    }
    public static void solution(int n ){
        for(int i = 1; i <= n*2; i++){
            for(int j = 1; j <= n; j++) {
                if(i % 2 == 0) {
                    if( j % 2 == 0) System.out.print("*");
                    else System.out.print(" ");
                }else{
                    if( j % 2 == 1) System.out.print("*");
                    else System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}
