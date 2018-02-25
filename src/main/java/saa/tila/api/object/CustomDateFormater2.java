package saa.tila.api.object;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CustomDateFormater2 extends JsonSerializer<Date> {
    private SimpleDateFormat dateFormat = new SimpleDateFormat(
            "yyyy-MM-dd HH:mm:ss" //2017-06-02 08:07:41

    );

    @Override
    public void serialize(Date date, JsonGenerator generator, SerializerProvider provider
    ) throws IOException, JsonProcessingException {
        String str = dateFormat.format(date);
        generator.writeString(str);
    }
}