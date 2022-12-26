<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Book Store</title>
            </head>
            <body align="center">
                <h1>Books Available:</h1>
                <table border="2" align="center" width="80%" height="40%">
                    <tr style="text-align: center; background-color: lightgreen;">
                        <th>Bookname</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Price</th>
                    </tr>
                    <xsl:for-each select="bookDet/Book">
                        <tr style="text-align: center">
                            <td>
                                <xsl:value-of select="Bookname" />
                            </td>
                            <td>
                                <xsl:value-of select="Author" />
                            </td>
                            <td>
                                <xsl:value-of select="Publisher" />
                            </td>
                            <td>
                                <xsl:value-of select="Price" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>