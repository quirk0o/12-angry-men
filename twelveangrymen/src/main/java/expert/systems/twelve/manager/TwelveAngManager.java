package expert.systems.twelve.manager;

import expert.systems.twelve.manager.jsmile.LicenseProvider;
import expert.systems.twelve.manager.jsmile.SmileLicense;
import expert.systems.twelve.model.Question;
import expert.systems.twelve.model.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import smile.License;
import smile.Network;

@Service
public class TwelveAngManager {
    private Network network;

    @Autowired
    private LicenseProvider licenseProvider;

    public TwelveAngManager(@Value(value = "${smile.network.file}") String networkFilePath){
        licenseProvider.genLicense();

        network = new Network();
        network.readFile(networkFilePath);
    }

    private Result convertToResult(String[] guiltyOutcome, double[] aValues){
        double noProb = 0;
        double yesProb = 0;
        double playOffProb = 0;

        for (int i = 0; i < guiltyOutcome.length; i++)
            switch (guiltyOutcome[i]){
                case "yes":
                    yesProb = aValues[i];
                    break;
                case "no":
                    noProb = aValues[i];
                    break;
                case "playOff":
                    playOffProb = aValues[i];
                    break;
            }
        return new Result(yesProb, noProb, playOffProb);

    }


    public Result   CalculateProbabilities(Question question){
        network.setVirtualEvidence("ev_1", new double[]{question.getEv1(), 1.0 - question.getEv1()});
        network.setVirtualEvidence("ev_2", new double[]{question.getEv2(), 1.0 - question.getEv2()});
        network.setVirtualEvidence("ev_3", new double[]{question.getEv3(), 1.0 - question.getEv3()});
        network.setVirtualEvidence("ev_4", new double[]{question.getEv4(), 1.0 - question.getEv4()});
        network.setVirtualEvidence("ev_5", new double[]{question.getEv5(), 1.0 - question.getEv5()});
        network.setVirtualEvidence("ev_6", new double[]{question.getEv6(), 1.0 - question.getEv6()});
        network.setVirtualEvidence("ev_7", new double[]{question.getEv7(), 1.0 - question.getEv7()});

        network.updateBeliefs();

        String[] guiltyOutcome = network.getOutcomeIds("isBoyGuilty");
        double[] outcomeValues = network.getNodeValue("isBoyGuilty");

        return convertToResult(guiltyOutcome, outcomeValues);
    }
}
