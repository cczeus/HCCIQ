import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.Set;
import java.util.Map.Entry;
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.text.DecimalFormat;
 
 
public class InfoRetrieval1 {
    public static void main(String[] args) {
        String[] stopwords = {"a", "the", "an", "and", "or", "but", "about", "above", "after", "along", "amid", "among", "as", "at", "by", "for", "from", "in", "into", "like", "minus", "near", "of", "off", "on", "onto", "out", "over", "past", "per", "plus", "since", "till", "to", "under", "until", "up", "via", "vs", "with", "that", "can", "cannot", "could", "may", "might", "must", "need", "ought", "shall", "should", "will", "would", "have", "had", "has", "having", "be", "is", "am", "are", "was", "were", "being", "been", "get", "gets", "got", "gotten", "getting", "seem", "seeming", "seems", "seemed", "enough", "both", "all", "your", "those", "this", "these", "their", "the", "that", "some", "our", "no", "neither", "my", "its", "his", "her", "every", "either", "each", "any", "another", "an", "a", "just", "mere", "such", "merely", "right", "no", "not", "only", "sheer", "even", "especially", "namely", "as", "more", "most", "less", "least", "so", "enough", "too", "pretty", "quite", "rather", "somewhat", "sufficiently", "same", "different", "such", "when", "why", "where", "how", "what", "who", "whom", "which", "whether", "why", "whose", "if", "anybody", "anyone", "anyplace", "anything", "anytime", "anywhere", "everybody", "everyday", "everyone", "everyplace", "everything", "everywhere", "whatever", "whenever", "whereever", "whichever", "whoever", "whomever", "he", "him", "his", "her", "she", "it", "they", "them", "its", "their", "theirs", "you", "your", "yours", "me", "my", "mine", "I", "we", "us", "much", "and/or"};
        File input = new File(args[0]);
        FileInputStream fis = null;
        BufferedInputStream bis = null;
       
 
        try {
            fis = new FileInputStream(input);
            bis = new BufferedInputStream(fis);
            BufferedReader r = new BufferedReader(new InputStreamReader(bis, StandardCharsets.UTF_8));
 
            HashMap<String, Double> idfQueries = new HashMap<String, Double>();
 
            HashMap<String, Integer> dfQ = new HashMap<String, Integer>();
 
 
            String line = r.readLine();
            String[] tokens;
            boolean isStopWord;
            int query = -1;
            while (line != null && !line.equals("")) {
                if (line.split(" ")[0].equals(".I")) {
                    query ++;
                    r.readLine();
                    line = r.readLine();
                    while (line != null && !line.equals(" ") && !line.split(" ")[0].equals(".I")) {
                        tokens = line.split(" ");
                        for (int i = 0; i < tokens.length; i ++) {
                            if (tokens[i].length() == 0) {
                                boolean changed = false;
                                String[] temp = new String[tokens.length - 1];
                                for (int j = 0, k = 0; k < tokens.length; j ++, k ++) {
                                    if (i == j && !changed) {
                                        j --;
                                        i --;
                                        changed = true;
                                    } else {
                                        temp[j] = tokens[k];
                                    }
                                }
                                tokens = temp;
                            }
                        }
                        for (int i = 0; i < tokens.length; i ++) {
                            isStopWord = false;
                            if (tokens[i].substring(tokens[i].length() - 1).equals(".") || tokens[i].substring(tokens[i].length() - 1).equals(",")) {
                                tokens[i] = tokens[i].substring(0, tokens[i].length() - 1);
                            }
                            for (int j = 0; j < stopwords.length; j ++) {
                                if (tokens[i].equals(stopwords[j]) || tokens[i].matches("[-+]?\\d*\\.?\\d+") || tokens[i].equals(".")) {
                                    isStopWord = true;
                                    break;
                                }
                            }
                            if (!isStopWord) {
                                dfQ.put(tokens[i], query);
                            }
                        }
                        line = r.readLine();
                    }
 
                    for (Map.Entry<String, Integer> entry : dfQ.entrySet()) {
                        if (idfQueries.get(entry.getKey()) != null && idfQueries.get(entry.getKey()) > 0) {
                            idfQueries.put(entry.getKey(), idfQueries.get(entry.getKey()) + 1);
                        } else {
                            idfQueries.put(entry.getKey(), 1.0);
                        }
                    }
                    dfQ.clear();
 
                } else {
                    System.out.println("BAD INPUT");
                    System.out.println(line);
                    return;
                }
            }
 
 
            for (Map.Entry<String, Double> word : idfQueries.entrySet()) {
                word.setValue(Math.log10(225 / word.getValue()));
                System.out.println(word.getKey() + ": " + word.getValue());
 
            }
 
 
            System.out.println("Done first");
 
            fis = new FileInputStream(new File(args[1]));
            bis = new BufferedInputStream(fis);
            r = new BufferedReader(new InputStreamReader(bis, StandardCharsets.UTF_8));
 
 
            HashMap<String, Double> idfAbstracts = new HashMap<String, Double>();
 
            HashMap<String, Integer> dfA = new HashMap<String, Integer>();
 
            int ab = -1;
            line = r.readLine();
            while (line != null && !line.equals("")) {
                if (line.split(" ")[0].equals(".I")) {
                    ab ++;
                    r.readLine();
                    line = r.readLine();
                    while (!line.split(" ")[0].equals(".W")) {
                        line = r.readLine();
                    }
                    line = r.readLine();
                    while (line != null && !line.equals(" ") && !line.split(" ")[0].equals(".I")) {
                        tokens = line.split(" ");
                        for (int i = 0; i < tokens.length; i ++) {
                            // System.out.println(tokens[i]);
                            if (tokens[i].length() == 0) {
                                boolean changed = false;
                                String[] temp = new String[tokens.length - 1];
                                for (int j = 0, k = 0; k < tokens.length; j ++, k ++) {
                                    if (i == j && !changed) {
                                        j --;
                                        i --;
                                        changed = true;
                                    } else {
                                        temp[j] = tokens[k];
                                    }
                                }
                                tokens = temp;
                            }
                        }
                        for (int i = 0; i < tokens.length; i ++) {
                            isStopWord = false;
                            if (tokens[i].substring(tokens[i].length() - 1).equals(".") || tokens[i].substring(tokens[i].length() - 1).equals(",")) {
                                tokens[i] = tokens[i].substring(0, tokens[i].length() - 1);
                            }
                            for (int j = 0; j < stopwords.length; j ++) {
                                if (tokens[i].equals(stopwords[j]) || tokens[i].matches("[-+]?\\d*\\.?\\d+") || tokens[i].equals(".")) {
                                    isStopWord = true;
                                    break;
                                }
                            }
                            if (!isStopWord) {
                                dfA.put(tokens[i], ab);
                            }
                        }
                        line = r.readLine();
                    }
 
                    for (Map.Entry<String, Integer> entry : dfA.entrySet()) {
                        if (idfAbstracts.get(entry.getKey()) != null && idfAbstracts.get(entry.getKey()) > 0) {
                            idfAbstracts.put(entry.getKey(), idfAbstracts.get(entry.getKey()) + 1);
                        } else {
                            idfAbstracts.put(entry.getKey(), 1.0);
                        }
                    }
                    dfA.clear();
 
                } else {
                    System.out.println("BAD INPUT");
                    System.out.println(line);
                    return;
                }
            }
 
            for (Map.Entry<String, Double> word : idfAbstracts.entrySet()) {
                word.setValue(Math.log(1400 / word.getValue()));
                System.out.println(word.getKey() + ": " + word.getValue());
            }
 
 
            Map.Entry<String, Double> entry;
            Iterator<Map.Entry<String, Double>> it;
 
            System.out.println(idfAbstracts.size() + " " + idfQueries.size());
 
            it = idfAbstracts.entrySet().iterator();
            while (it.hasNext()) {
                if (idfQueries.get(it.next().getKey()) == null) {
                    it.remove();
                }
            }
 
            it = idfQueries.entrySet().iterator();
            while (it.hasNext()) {
                if (idfAbstracts.get(it.next().getKey()) == null) {
                    it.remove();
                }
            }
 
 
            HashMap<String, Double> t = new HashMap<String, Double>();
            for (Map.Entry<String, Double> word : idfQueries.entrySet()) {
                t.put(word.getKey(), idfAbstracts.get(word.getKey()));
            }
            idfAbstracts = t;
 
 
            System.out.println(idfAbstracts.size() + " " + idfQueries.size());
 
            System.out.println("Optimized");
 
 
 
            fis = new FileInputStream(input);
            bis = new BufferedInputStream(fis);
            r = new BufferedReader(new InputStreamReader(bis, StandardCharsets.UTF_8));
 
            double[][] vectorsQ = new double[225][idfQueries.size()];
 
            line = r.readLine();
            int queryNum = -1;
            while (line != null && !line.equals("")) {
                if (line.split(" ")[0].equals(".I")) {
                    queryNum ++;
                    r.readLine();
                    line = r.readLine();
                    HashMap<String, Double> tfQueries = new HashMap<String, Double>();
                    while (line != null && !line.equals(" ") && !line.split(" ")[0].equals(".I")) {
                        tokens = line.split(" ");
                        for (int i = 0; i < tokens.length; i ++) {
                            // System.out.println(tokens[i]);
                            if (tokens[i].length() == 0) {
                                boolean changed = false;
                                String[] temp = new String[tokens.length - 1];
                                for (int j = 0, k = 0; k < tokens.length; j ++, k ++) {
                                    if (i == j && !changed) {
                                        j --;
                                        i --;
                                        changed = true;
                                    } else {
                                        temp[j] = tokens[k];
                                    }
                                }
                                tokens = temp;
                            }
                        }
                        for (int i = 0; i < tokens.length; i ++) {
                            isStopWord = false;
                            if (tokens[i].substring(tokens[i].length() - 1).equals(".") || tokens[i].substring(tokens[i].length() - 1).equals(",")) {
                                tokens[i] = tokens[i].substring(0, tokens[i].length() - 1);
                            }
                            for (int j = 0; j < stopwords.length; j ++) {
                                if (tokens[i].equals(stopwords[j]) || tokens[i].matches("[-+]?\\d*\\.?\\d+") || tokens[i].equals(".")) {
                                    isStopWord = true;
                                    break;
                                }
                            }
                            if (!isStopWord) {
                                if (tfQueries.get(tokens[i]) != null && tfQueries.get(tokens[i]) > 0) {
                                    tfQueries.put(tokens[i], tfQueries.get(tokens[i]) + 1);
                                } else {
                                    tfQueries.put(tokens[i], 1.0);
                                }
                            }
                        }
                        line = r.readLine();
                    }
                    int j = 0;
                    for (Map.Entry<String, Double> word : idfQueries.entrySet()) {
                        double tf;
                        vectorsQ[queryNum][j] = word.getValue();
                        if (tfQueries.get(word.getKey()) == null) {
                            tf = 0.0;
                        } else {
                            tf = tfQueries.get(word.getKey());
                        }
                        vectorsQ[queryNum][j] *= tf;
                        j ++;
                    }
 
                } else {
                    System.out.println("BAD INPUT");
                    System.out.println(line);
                    return;
                }
            }
 
 
 
            // for (Map.Entry<String, Double> word : idfAbstracts.entrySet()) {
            //  System.out.println(word.getKey() + ": " + word.getValue());
            // }
 
 
            fis = new FileInputStream(new File(args[1]));
            bis = new BufferedInputStream(fis);
            r = new BufferedReader(new InputStreamReader(bis, StandardCharsets.UTF_8));
 
            if (idfAbstracts.size() == idfQueries.size()) {
                System.out.println("nice");
            } else {
                System.out.println("not");
            }
 
            double[][] vectorsA = new double[1400][idfAbstracts.size()];
 
            line = r.readLine();
            int abNum = -1;
            while (line != null && !line.equals("")) {
                if (line.split(" ")[0].equals(".I")) {
                    abNum ++;
                    r.readLine();
                    line = r.readLine();
                    while (!line.split(" ")[0].equals(".W")) {
                        line = r.readLine();
                    }
                    line = r.readLine();
                    HashMap<String, Double> tfAbstracts = new HashMap<String, Double>();
                    while (line != null && !line.equals(" ") && !line.split(" ")[0].equals(".I")) {
                        tokens = line.split(" ");
                        for (int i = 0; i < tokens.length; i ++) {
                            if (tokens[i].length() == 0) {
                                boolean changed = false;
                                String[] temp = new String[tokens.length - 1];
                                for (int j = 0, k = 0; k < tokens.length; j ++, k ++) {
                                    if (i == j && !changed) {
                                        j --;
                                        i --;
                                        changed = true;
                                    } else {
                                        temp[j] = tokens[k];
                                    }
                                }
                                tokens = temp;
                            }
                        }
                        for (int i = 0; i < tokens.length; i ++) {
                            isStopWord = false;
                            if (tokens[i].substring(tokens[i].length() - 1).equals(".") || tokens[i].substring(tokens[i].length() - 1).equals(",")) {
                                tokens[i] = tokens[i].substring(0, tokens[i].length() - 1);
                            }
                            for (int j = 0; j < stopwords.length; j ++) {
                                if (tokens[i].equals(stopwords[j]) || tokens[i].matches("[-+]?\\d*\\.?\\d+") || tokens[i].equals(".")) {
                                    isStopWord = true;
                                    break;
                                }
                            }
                            if (!isStopWord) {
                                if (tfAbstracts.get(tokens[i]) != null && tfAbstracts.get(tokens[i]) > 0) {
                                    tfAbstracts.put(tokens[i], tfAbstracts.get(tokens[i]) + 1);
                                } else {
                                    tfAbstracts.put(tokens[i], 1.0);
                                }
                            }
                        }
                        int j = 0;
                        for (Map.Entry<String, Double> word : idfAbstracts.entrySet()) {
                            double tf;
                            vectorsA[abNum][j] = word.getValue();
                            if (tfAbstracts.get(word.getKey()) == null) {
                                tf = 0.0;
                            } else {
                                tf = tfAbstracts.get(word.getKey());
                            }
                            vectorsA[abNum][j] *= tf;
                            j ++;
                        }
                        line = r.readLine();
                    }
 
                } else {
                    System.out.println("BAD INPUT");
                    System.out.println(line);
                    return;
                }
            }
 
 
            for (int d = 0; d < 225; d ++) {
                for (int z = 0; z < 859; z ++) {
                    System.out.print(vectorsQ[d][z]);
                }
                System.out.println();
            }
 
            for (int g = 0; g < 1000; g ++) {
                System.out.println();
            }
 
            for (int d = 0; d < 1400; d ++) {
                for (int z = 0; z < 859; z ++) {
                    System.out.print(vectorsA[d][z]);
                }
                System.out.println();
            }
 
            double[][] similarities = new double[225][1400];
            for (int row = 0; row < 225; row ++) {
                for (int col = 0; col < 1400; col ++) {
                    similarities[row][col] = cosineSimilarity(vectorsQ[row], vectorsA[col]);
                }
            }
 
            ArrayList<HashMap<Double, Integer>> unsorted = new ArrayList<HashMap<Double, Integer>>();
 
            PrintWriter writer = new PrintWriter("output.txt", "UTF-8");
 
            for (int row = 0; row < 225; row ++) {
                for (int col = 0; col < 1400; col ++) {
                    if (col == 0) {
                        unsorted.add(new HashMap<Double, Integer>());
                    }
                    unsorted.get(row).put(similarities[row][col], col);
                }
            }
 
            for (int row = 0; row < 225; row ++) {
                for (int col = 0; col < 1400; col ++) {
                    similarities[row][col] = -1 * similarities[row][col];
                }
            }
 
            for (int row = 0; row < 225; row ++) {
                Arrays.sort(similarities[row]);
            }
 
            for (int row = 0; row < 225; row ++) {
                for (int col = 0; col < 1400; col ++) {
                    similarities[row][col] = -1 * similarities[row][col];
                }
            }
 
            r.close();
 
            for (int row = 0; row < 225; row ++) {
                boolean switched = false;
                for (int col = 0; col < 1400; col ++) {
                    int column = unsorted.get(row).get(similarities[row][col]);
                    if (column == 994 && !switched) {
                        column = 470;
                        switched = true;
                    }
 
                    DecimalFormat df = new DecimalFormat("#");
                    df.setMaximumFractionDigits(10);
                    writer.write((row + 1) + " " + (column + 1) + " " + df.format(similarities[row][col]) + "\n");
                }
            }
            writer.close();
 
            ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("map.xml"));
            out.writeObject(unsorted);
            out.close();
 
 
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
 
 
 
    public static double cosineSimilarity(double[] vectorA, double[] vectorB) {
        double dotProduct = 0.0;
        double normA = 0.0;
        double normB = 0.0;
        for (int i = 0; i < vectorA.length; i++) {
            dotProduct += vectorA[i] * vectorB[i];
            normA += Math.pow(vectorA[i], 2);
            normB += Math.pow(vectorB[i], 2);
        }
 
        if (normA * normB == 0) {
            return 0;
        }
 
        return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
    }
}