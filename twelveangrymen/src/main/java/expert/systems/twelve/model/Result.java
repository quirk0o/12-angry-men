package expert.systems.twelve.model;

public class Result {
    private double guiltyProb;
    private double notGuiltyProb;
    private double playOffProb;

    public Result(double guiltyProb, double notGuiltyProb, double playOffProb) {
        this.guiltyProb = guiltyProb;
        this.notGuiltyProb = notGuiltyProb;
        this.playOffProb = playOffProb;
    }

    public double getGuiltyProb() {
        return guiltyProb;
    }

    public double getNotGuiltyProb() {
        return notGuiltyProb;
    }

    public double getPlayOffProb() {
        return playOffProb;
    }
}
