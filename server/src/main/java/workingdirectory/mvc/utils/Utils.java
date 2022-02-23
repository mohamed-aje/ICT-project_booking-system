package workingdirectory.mvc.utils;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import workingdirectory.mvc.models.Desk;
import workingdirectory.mvc.models.DeskReservation;

import java.io.*;
import java.util.List;

public class Utils {
    public static void writePdf(String filename, List<String> content) throws DocumentException, FileNotFoundException {
        Document document = new Document();
        PdfWriter.getInstance(document, new FileOutputStream(filename));
        document.open();
        Font font = FontFactory.getFont(FontFactory.COURIER, 16, BaseColor.BLACK);
        for (String str : content) {
            Paragraph paragraph = new Paragraph(str, font);
            document.add(paragraph);
        }
        document.close();
    }

    public static byte[] getFileAsByteArray(String filename) {
        byte[] contents = null;
        try {
            InputStream stream = new FileInputStream(filename);
            contents = new byte[8192];
            ByteArrayOutputStream baos = new ByteArrayOutputStream();

            int bytesRead;
            while ((bytesRead = stream.read(contents)) != -1) {
                baos.write(contents, 0, bytesRead);
            }

            stream.close();
        } catch (FileNotFoundException e) {
            System.out.println("File Not found" + e);
        } catch (IOException e) {
            System.out.println("IO Ex" + e);
        }


        return contents;

    }
}
