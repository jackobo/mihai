
export enum GameStatus {
    GameStarted ,
    GameOver
}

const WINNING_NUMBERS_COUNT = 10;

export class GameManager{
    randomNumbers: number[] = [];

    private _generateRandomNumber(): number{
        let r = Math.random() * 100;
        return Math.floor(r);
    }

    private _generateRandomNumberInRange(range: number): number{
        return this._generateRandomNumber() % range;
    }

    private _fillGameRandomNumbers(): void{
        for( let i = 1; i <= 100; i++)
        {
            const r= this._generateRandomNumberInRange(50);
            this.randomNumbers.push(r);

        }
    }

    private _selectDistinctIndexes(): number[]{
        const randomIndexes: number[] = [];
        while (randomIndexes.length < WINNING_NUMBERS_COUNT) {
            let r = this._generateRandomNumberInRange(100);
            if(!randomIndexes.includes(r)) {
                randomIndexes.push(r);
            }
        }
        return randomIndexes;
    }

    private _generateWinningNumbers(randomIndexes: number[]): void{
        for ( let i = 0; i < randomIndexes.length; i++)
        {
            const index = randomIndexes[i];
            this.randomNumbers[index] += 50;
        }
    }

    startGame(){
        this._fillGameRandomNumbers();

        const randomIndexes = this._selectDistinctIndexes();

        this._generateWinningNumbers(randomIndexes);

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
