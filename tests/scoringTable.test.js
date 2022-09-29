const ScoringTable = require("../lib/scoringTable");
const Frame = require("../lib/frame");

describe("ScoringTable", () => {
  it("adds first frame", () => {
    const table = new ScoringTable();
    const frame = new Frame(1);
    frame.setRollOne(5);
    frame.setRollTwo(5);
    table.addFrame(frame);
    expect(table.getTotalScoreAtFrame(1)).toEqual(10);
  });

  it("adds second frame with bonus", () => {
    const table = new ScoringTable();
    const frameOne = new Frame(1);
    frameOne.setRollOne(5);
    frameOne.setRollTwo(5);
    table.addFrame(frameOne);
    const frameTwo = new Frame(1);
    frameTwo.setRollOne(5);
    frameTwo.setRollTwo(5);
    table.addFrame(frameTwo);
    expect(table.getTotalScoreAtFrame(2)).toEqual(25);
  });

  it("adds third frame with bonus", () => {
    const table = new ScoringTable();
    const frameOne = new Frame(1);
    frameOne.setRollOne(5);
    frameOne.setRollTwo(5);
    table.addFrame(frameOne);
    const frameTwo = new Frame(1);
    frameTwo.setRollOne(5);
    frameTwo.setRollTwo(5);
    table.addFrame(frameTwo);
    const frameThree = new Frame(1);
    frameThree.setRollOne(5);
    frameThree.setRollTwo(5);
    table.addFrame(frameThree);
    expect(table.getTotalScoreAtFrame(3)).toEqual(40);
  });

  it("scores a perfect game", () => {
    const table = new ScoringTable();
    const frameOne = new Frame(1);
    frameOne.setRollOne(10);
    table.addFrame(frameOne);
    const frameTwo = new Frame(2);
    frameTwo.setRollOne(10);
    table.addFrame(frameTwo);
    const frameThree = new Frame(3);
    frameThree.setRollOne(10);
    table.addFrame(frameThree);
    const frameFour = new Frame(4);
    frameFour.setRollOne(10);
    table.addFrame(frameFour);
    const frameFive = new Frame(5);
    frameFive.setRollOne(10);
    table.addFrame(frameFive);
    const frameSix = new Frame(6);
    frameSix.setRollOne(10);
    table.addFrame(frameSix);
    const frameSeven = new Frame(7);
    frameSeven.setRollOne(10);
    table.addFrame(frameSeven);
    const frameEight = new Frame(8);
    frameEight.setRollOne(10);
    table.addFrame(frameEight);
    const frameNine = new Frame(9);
    frameNine.setRollOne(10);
    table.addFrame(frameNine);
    const frameTen = new Frame(10);
    frameTen.setRollOne(10);
    table.addFrame(frameTen);
    const frameBonus = new Frame("BONUS");
    frameBonus.setRollOne(10);
    frameBonus.setRollTwo(10);
    table.addFrame(frameBonus);
    expect(table.getTotalScoreAtFrame(10)).toEqual(300);
  });
});
