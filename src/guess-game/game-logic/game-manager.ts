
export enum GameStatus {
    GameStarted ,
    GameOver
}

export class GameManager{
    randomNumbers: number[] = [];
    startGame(){
        for( let i = 1; i <= 100; i++)
        {
            let r = Math.random() * 100;
            r = Math.floor(r);
            r = r % 50;
            this.randomNumbers.push(r);

        }

        const randomIndexes: number[] = [];
        while (randomIndexes.length < 10) {
            let r = Math.random() * 100;
            r = Math.floor(r);
            if (r === 100){
                r = 99;
            }
            if(!randomIndexes.includes(r)) {
                randomIndexes.push(r);
            }
        }


        for ( let i = 0; i < 10; i++)
        {
            const index = randomIndexes[i];
            this.randomNumbers[index] += 50;

        }
    }
    revealedNumbers: number[] = [];

    revealNumber(n: number): GameStatus {
        this.revealedNumbers.push(n)
        if(this.revealedNumbers.length === 5) {
            return GameStatus.GameOver;
        }

        return GameStatus.GameStarted;

    }

    getScore(): number{
        let winningNumbers = this.revealedNumbers.filter(n => n >= 50);
        if (winningNumbers.length < 3){
            return 0
        }
        return 3 - (5 - winningNumbers.length)
    }

}
