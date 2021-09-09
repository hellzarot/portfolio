<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite31220de90373b8248c283c9f38f9b30
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite31220de90373b8248c283c9f38f9b30::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite31220de90373b8248c283c9f38f9b30::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInite31220de90373b8248c283c9f38f9b30::$classMap;

        }, null, ClassLoader::class);
    }
}