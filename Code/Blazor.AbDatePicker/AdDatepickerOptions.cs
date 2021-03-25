using System;

namespace Blazor.AbDatePicker
{
    public class AdDatepickerOptions
    {
        public Theme Theme { get; set; }
        public StartView StartView { get; set; }
        public WeekDayFormat WeekDayFormat { get; set; }
        public DayOfWeek FirstDayOfWeek { get; set; }
        public DayOfWeek[] DisabledDayOfWeek { get; set; }
        public string InputFormats { get; set; }
        public string OutputFormat { get; set; }
        public DateTime? MinDate { get; set; }
        public DateTime? MaxDate { get; set; }
        public bool Modal { get; set; }
        public bool Inline { get; set; }
        public bool Disable { get; set; }
    }

    public enum Theme
    {
        Default,
        Bootstrap,
        Blue,
        Green,
        // ReSharper disable once UnusedMember.Global
        Marron
    }
    public enum StartView
        : byte
    {
        Days = 0,
        Months = 1,
        Years = 2,
        Default = Days
    }

    public enum WeekDayFormat
    {
        Short,
        Narrow,
        Default = Short
    }

    public enum DayOfWeek
        : byte
    {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
        Default = Sunday
    }
}