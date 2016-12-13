import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })

export class CapitalizePipe implements PipeTransform {
    transform(title: string) {
        if (!title) return title;
        let titleArr = title.split(" ");
        titleArr.forEach(function (word, index) {
            word = word[0].toUpperCase() + word.slice(1);
            titleArr[index] = word
        });
        title = titleArr.join(" ");
        return title;
    }
}